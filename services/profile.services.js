const Profile = require("../models/profile.model")
const { generate_token } = require("../utils/jwtHelper")
const bcrypt = require('bcrypt')

const verify_password = async(hashedPassword,user_password)=>{
    const flag = bcrypt.compare(user_password,hashedPassword)
    return flag
}

async function create_profile(model,callback){
    try{
        const new_profile = new Profile(model)
        new_profile.save()
        .then(async(profile)=>{
            return callback(null,profile)
        })
        .catch((error)=>{
            return callback({status_code:500,error:error.message})
        })
    }
    catch(error){
        return callback({status_code:500,error:error.message})
    }
}

async function login(model,callback){
    try{
        console.log(model)
        // find the user with given user_email
        const filter = {user_email:model.user_email}
        Profile.findOne(filter)
        .then(async(profile)=>{
            console.log(profile)
            if(profile){
                if(! await verify_password(profile.user_password,model.user_password)){
                    return callback({status_code:500,error:"user's crenditials are not matched...!"})
                }
                const filter = {profile:profile._id}
                // create the data for token
                const token_data = {
                    user_name: profile.user_name,
                    user_email: profile.user_email,
                    user_phone: profile.user_phone,
                    user_role: profile.user_role,
                    user_region: profile.user_region
                }

                if(profile.is_super_admin === true){
                    const data = generate_token(token_data)
                        // if there is any kind of internal error occure during generation of token
                        if(data.error){
                            return callback({status_code:500,error:data.message})                    
                        }        
                        // return the token of the user
                        return callback(null,data.data)
                }
                else{
                    return callback({status_code:401,error:"Unauthorized profile"})    
                }
            }
            else{
                return callback({status_code:401,error:"Unauthorized profile"})    
            }
        })
        .catch((error)=>{
            return callback({status_code:500,error:error.message})    
        })
    }
    catch(error){
        return callback({status_code:500,error:error.message})
    }
}

module.exports = {
    create_profile,
    login
}