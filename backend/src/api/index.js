const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const cookieparser = require("cookie-parser")
const http = require("http")
const { Server } = require("socket.io")

const connectdb = require("../Db")
const userrouter = require("../routers/UserRouter")
const contactrouter=require("../routers/ContactRouter.js")
dotenv.config()

const app = express()
const server = http.createServer(app)

/* ===================== SOCKET.IO ===================== */

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST","Delete","PUT","PATCH"],
    credentials: true
  }
})

io.on("connection", (socket) => {
  console.log("🟢 socket connected:", socket.id)

  // example event
  socket.on("join_room", (roomid) => {
    socket.join(roomid)
    console.log(`User joined room: ${roomid}`)
  })

  socket.on("send_message", (data) => {
    io.to(data.roomid).emit("receive_message", data)
  })

  socket.on("disconnect", () => {
    console.log("🔴 socket disconnected:", socket.id)
  })
})

/* ===================== MIDDLEWARE ===================== */

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}))

app.use(express.json())
app.use(cookieparser())

/* ===================== DB CONNECTION (CACHED) ===================== */

let isconnected = false

app.use(async (req, res, next) => {
  if (!isconnected) {
    await connectdb()
    isconnected = true
    console.log("MongoDB connected")
  }
  next()
})

/* ===================== ROUTES ===================== */

app.get("/", (req, res) => {
  res.send("API is running 🚀")
})
app.get("/contact/sendmessage", (req, res) => {
  res.json({ success: true, message: "Contact route working" })
})


app.use("/user", userrouter)
app.use("/contact",contactrouter)
/* ===================== SERVER START ===================== */

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
