const Incubation = require("../models/incubation.model");

async function add_incubation_services(model,callback){
    try{
        const new_incubation = await Incubation.create(model)
        return callback(null,new_incubation.toJSON())
    }
    catch(error){
        return callback({"status_code" : 500,"error":error.message})
    }
}

module.exports = {
    add_incubation_services
}