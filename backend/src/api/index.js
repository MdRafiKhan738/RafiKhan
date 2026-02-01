const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const cookieparser = require("cookie-parser")

const connectdb = require("../Db")
const userrouter = require("../routers/UserRouter")

dotenv.config()

const app = express()

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
  res.send("API is running")
})

app.use("/user", userrouter)

/* ===================== EXPORT FOR VERCEL ===================== */

module.exports = app
