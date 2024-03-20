const mongoose = require('mongoose')
require('dotenv').config()



const connect_db = ()=>{
    
    mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@gic.cbipwdl.mongodb.net/GIC`)
    .then((response)=>{
        console.log("connection established successfully")
    })
    .catch((error)=>{
        console.log(error.message)
    })
}

module.exports = {
    connect_db
}