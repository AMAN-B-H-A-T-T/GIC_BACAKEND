const nodemailer = require('nodemailer')
require('dotenv').config()

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : process.env.EMAIL_ADDRESS,
        pass : process.env.PASSWORD
    }
})

const sendMail = (to_address,subject,body)=>{
    try{
        var mailOptions = {
            from : process.env.EMAIL_ADDRESS,
            to: to_address,
            subject : subject,
            body: body
        }
        transporter.sendMail(mailOptions,(error,info)=>{

        })
    }
    catch(error){
        throw new Error(error.message)
    }
}

module.exports = sendMail