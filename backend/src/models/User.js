const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    fullname:{
        type:String,
    
    },
    email:{
        type:String,
        
        unique:true
    },
    password:{

        type:String
    },
    signupotp:{
        type:String
    },
    signinotp:{

        type:String
    },
    gender:{

        type:String,
        enum:["Male","Female","Other"]
    },
    profilepic:{
        type:String},
        Adress:{

            type:String
        },
        country:{

            type:String
        },
        mobile:{

            type:String
        },
        role:{

            type:String,
            enum:["User","SuperAdmin"],
            default:"User"
        },
        supverificationotp:{

            type:String
        },
        superadminotpexpires:{

            type:Date
        },
        issupverify:{

            type:Boolean,
        },
        secretcode :{

            type:String
        }
})
module.exports=mongoose.model("User",userschema);