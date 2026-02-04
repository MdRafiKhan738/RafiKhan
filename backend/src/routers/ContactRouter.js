const express =require("express")
const {  getallcontactmessages, replycontactmessage, getusermessages, sendcontactmessage } = require("../controllers/ContactController")
const router=express.Router()
router.post("/sendmessage",sendcontactmessage)
router.get("/getallmessages",getallcontactmessages)
router.post("/sendadminreply/:contactid",replycontactmessage)
router.get("/getusermessages/:email",getusermessages)
module.exports=router;