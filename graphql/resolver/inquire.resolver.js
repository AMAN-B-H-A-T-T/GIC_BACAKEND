const Inquire = require("../../models/inquires.model");

module.exports = {
    inquires : ()=>{
        return Inquire.find({})
        .then((inquires)=>{
            return inquires.map((inquire,index)=>{
                return {...inquire._doc,_id:inquire._id}
            })
        })
        .catch((error)=>{
            throw new Error(error.message)
        })
    },
    add_inquire: (args)=>{
        const model = {
            fname : args.inquire_input.fname,
            lname : args.inquire_input.lname,
            email : args.inquire_input.email,
            contact : args.inquire_input.contact,
            message: args.inquire_input.message,
        }
        const new_inquire = new Inquire(model)
        return new_inquire.save()
        .then((inquire)=>{
            return {...inquire._doc,_id:inquire._id}
        })
        .catch((error)=>{
            throw new Error(error.message)
        })
    }
}