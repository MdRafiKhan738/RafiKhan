const express=require("express")
const app=express()
const dotenv=require("dotenv")
dotenv.config()
const cors=require("cors")
const cookieparser=require('cookie-parser')
const connectdb = require("../Db")
app.get("/",(req,res)=>{
    res.send("API is running")
})
app.use(cors())
app.use(cors({
   origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}));
app.use(express.json())
app.use(cookieparser())
const PORT=process.env.PORT||5000
app.listen(PORT,async()=>{
    console.log(`Server running on PORT ${PORT}`)
    connectdb()
})



