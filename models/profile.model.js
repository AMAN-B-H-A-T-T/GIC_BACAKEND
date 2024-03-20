const mongoose = require('mongoose')

const Profile = mongoose.model("Profile",mongoose.Schema({
    user_name : {
        type:String,
        required: true,
    },
    user_email: {
        type: String,
        required:true,
        unique: true
    },
    user_phone: {
        type: String,
        required:true
    },
    user_password:{
        type:String,
        required:true
    },
    user_region: {
        type: String,
        requried: true,
    },
    user_role: {
        type:String,
        required:true
    }
}))

module.exports = Profile