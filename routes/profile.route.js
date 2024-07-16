const {validate,ValidationError} = require('express-validation')
const express = require('express')
const { profile_validation, login_validation } = require('../utils/validation.middleware')
const { create_profile_controller, login_controller } = require('../controller/profiler.controller')
const route = express.Router()

route.post("/create-profile",validate(profile_validation,{},{}),create_profile_controller)
route.post("/login",validate(login_validation,{},{}),login_controller)

route.use((err,req,res,next)=>{
    if(err instanceof ValidationError){
        return res.status(err.statusCode).json(err.details.body[0].message)
    }
    return res.status(500).json(err,message)
})

module.exports = route