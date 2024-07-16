const Reachout = require("../../models/reachout.models");

module.exports = {
    add_query : async (args)=>{
        try{
            const model = {
                name : args.reachout_input.name,
                email : args.reachout_input.email,
                contact : args.reachout_input.contact,
                message : args.reachout_input.message,
            }
            const new_reachout = await Reachout.create(model)
            return new_reachout
        }
        catch(error){
            throw new Error(error.message)
        }
    },
    reachouts : async()=>{
        try{
            const reachout_lst = await Reachout.findAll()
            return reachout_lst
        }
        catch(error){
            throw new Error(error.message)
        }
    }
}