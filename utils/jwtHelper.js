const jwt = require('jsonwebtoken')

const generate_token = (model)=>{
    try{
        const token = jwt.sign(model,process.env.SECRET_KEY,{expiresIn:'1d'})
        return {error:false,data:token}
    }
    catch(error){
        return {error:true,message:error.message}
    }
}
const verify_token = (token)=>{
    try{

    }
    catch(error){
        return {error:true,message:error.message}
    }
}

module.exports = {
    generate_token,
    verify_token
}