const Incubation = require("../../models/incubation.model");

module.exports = {
    incubations : ()=>{
        return Incubation.find({})
        .then((incubations)=>{
            return incubations.map((incubation,index)=>{
                return {...incubation._doc,_id:incubation._id}
            })
        })
        .catch((error)=>{
            throw new Error(error.message)
        })
    },
    add_incubation : (args)=>{
        const model = {
            candidate_name : args.incubation_input.candidate_name,
            email : args.incubation_input.email,
            start_up_name : args.incubation_input.start_up_name,
            city : args.incubation_input.city,
            contactm : args.incubation_input.contactm,
            description : args.incubation_input.description,
            stage : args.incubation_input.stage,
            like_to_avail : args.incubation_input.like_to_avail,
            another_incubation_center : args.incubation_input.another_incubation_center,
            team_size : args.incubation_input.team_size,
            raised_fund : args.incubation_input.raised_fund,
            funding_agency_name : args.incubation_input.funding_agency_name,
            attechment : args.incubation_input.attechment
        }

        const new_incubation = new Incubation(model)
        return new_incubation.save()
        .then((incubation)=>{
            return {...incubation._doc,_id:incubation._id}
        })
        .catch((error)=>{
            throw new Error(error.message)
        })
    }
}