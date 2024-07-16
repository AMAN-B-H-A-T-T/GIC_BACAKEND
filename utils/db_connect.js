const mongoose = require('mongoose')
const Pool = require('pg').Pool
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

const postgreSQL = ()=>{
    try{
        const pool = new Pool({
            user: 'me',
            host: 'localhost',
            database: 'api',
            password: 'password',
            port: 5432,
          })
          console.log("postgreSQL connection successfull")
          return pool
    }
    catch(error){
        console.log(error.message)
    }    
}

module.exports = {
    connect_db,
    postgreSQL
}