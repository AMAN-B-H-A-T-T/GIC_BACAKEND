const { create_profile, login } = require("../services/profile.services")
const bcrypt = require('bcrypt')

const generate_hashed_password = async (user_password) => {
    return bcrypt.hash(user_password, parseInt(process.env.SALT_ROUND))
        .then((password) => {
            return password
        })
        .catch((error) => {
            throw error
        })
}

const create_profile_controller = async (req, res) => {
    try {
        const model = {
            user_name: req.body.user_name,
            user_email: req.body.user_email,
            user_contact: req.body.user_contact,
            user_password: await generate_hashed_password(req.body.user_password),
            is_session_active: req.body.is_session_active
        }
        create_profile(model, (error, result) => {
            if (error) {
                return res.status(error.status_code).send({
                    "message": "error",
                    "error": error.error
                })
            }

            return res.status(200).send({
                "message": "success",
                "data": result
            })
        })
    }
    catch (error) {
        return res.status(500).send({
            message: "error",
            "error": error.message
        })
    }

}

const login_controller = async(req,res)=>{
    try{
        const model = {
            user_email:req.body.user_email,
            user_password:req.body.user_password
        }
        login(model,(error,result)=>{
            if(error){
                return res.status(error.status_code).send({
                    "message":"error",
                    "error":error.error
                })
            }
            
            return res.status(200).send({
                "message":"success",
                "data":result
            })
        })
    }
    catch(error){
        return res.status(500).send({
            "message":"error",
            "error":error.message
        })
    }
}
module.exports = {
    create_profile_controller,
    login_controller
}