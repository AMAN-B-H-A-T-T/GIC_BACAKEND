const { add_incubation_services } = require("../services/incubation.services")

const add_incubation = async(req,res)=>{
    const model = {
        startUpTitle : req.body.startUpTitle,
        city : req.body.city,
        foundersName : req.body.foundersName,
        foundersEmail : req.body.foundersEmail,
        foundersContact : req.body.foundersContact,
        coFoundersName : req.body.coFoundersName,
        coFoundersEmail : req.body.coFoundersEmail,
        coFoundersContact : req.body.coFoundersContact,
        teamSize : req.body.teamSize,
        domain : req.body.domain,
        description : req.body.description,
        incubationFormUrl : req.file.location,
        aadharUrl : req.body.aadharUrl
    }   

    add_incubation_services(model,(error,result)=>{
        if(error){
            return res.status(error.status_code).send({
                "message":"error",
                "error":error.message
            })
        }

        return res.status(200).send({
            "message":"success",
            "data":result
        })
    })
}

module.exports = {
    add_incubation
}