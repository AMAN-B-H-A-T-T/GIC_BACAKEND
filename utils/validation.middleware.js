const {Joi} = require('express-validation')

const profile_validation = {
    body: Joi.object({
        user_name: Joi.string().required(),
        user_email: Joi.string().email().required(),
        user_phone: Joi.string().regex(/^\d{10}$/).required(),
        user_password: Joi.string().required(),
        user_region: Joi.string().required(),
        user_role: Joi.string().required()
    })
}

const login_validation = {
    body: Joi.object({
        user_email: Joi.string().email().required(),
        user_password: Joi.string().required()
    })
}
module.exports = {
    profile_validation,
    login_validation
}