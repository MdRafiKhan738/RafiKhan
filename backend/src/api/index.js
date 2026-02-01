const express=require("express")
const app=express()
const dotenv=require("dotenv")
dotenv.config()
const cors=require("cors")
const cookieparser=require('cookie-parser')
app.get("/",(req,res)=>{
    res.send("API is running")
})
app.use(cors())
app.use(express.json())
app.use(cookieparser())
const PORT=process.env.PORT||5000
