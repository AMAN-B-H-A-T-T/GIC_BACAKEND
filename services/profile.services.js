const RegionalAdmin = require("../models/RegionakAdmin.model")
const Profile = require("../models/profile.model")
const SuperAdmin = require("../models/superAdmin.model")
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
            if(profile.user_role === "super-admin"){
                const new_superAdmin = new SuperAdmin({profile:profile._id})
                await new_superAdmin.save()
            }
            else if(profile.user_role === "region-admin"){
                const new_regionalAdmin = new RegionalAdmin({profile: profile._id})
                await new_regionalAdmin.save()
            }
            return callback(null,{...profile._doc})
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
        // find the user with given user_email
        const filter = {user_email:model.user_email}
        Profile.findOne(filter)
        .then(async(profile)=>{
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

                if(profile.user_role === "super-admin"){
                    SuperAdmin.findOne(filter)
                    .then((superAdmin)=>{
                        // checke whether user is super admin or not
                        if(!superAdmin){
                            return callback({status_code:500,error:"You are not super-admin"})                
                        }
                        const data = generate_token(token_data)
                        // if there is any kind of internal error occure during generation of token
                        if(data.error){
                            return callback({status_code:500,error:data.message})                    
                        }        
                        // return the token of the user
                        return callback(null,data.data)
                    })
                    .catch((error)=>{
                        return callback({status_code:500,error:error.message})                
                    })
                }
                else if(profile.user_role === "region-admin"){
                    RegionalAdmin.findOne(filter)
                    .then((regionalAdmin)=>{
                        // checke whether user is regional admin or not
                        if(!regionalAdmin){
                            return callback({status_code:500,error:"You are not regional-admin"})                
                        }
                        const data = generate_token(token_data)
                        // if there is any kind of internal error occure during generation of token 
                        if(data.error){
                            return callback({status_code:500,error:data.message})                    
                        }      
                        // return the token of the user  
                        return callback(null,data.data)
                    })
                    .catch((error)=>{
                        return callback({status_code:500,error:error.message})    
                    })
                }
            }
            else{
                return callback({status_code:404,error:"Profile not found"})    
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