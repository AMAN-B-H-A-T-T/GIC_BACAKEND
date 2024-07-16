const { get_preSinged_url } = require("../../aws");
const Partner = require("../../models/partner.model");

module.exports = {
    partners : async()=>{
        try{
            console.log("called2")
            const partner_lst = await Partner.findAll()
            const lst = await Promise.all(partner_lst.map(async(part,index)=>{
                const url = await get_preSinged_url(part.logo)
                return {...part.toJSON(),url}
            }))
            console.log(lst)
            return lst
        }
        catch(error){
            throw new Error(error.message)
        }
    },
    add_partner : async(args)=>{
        const model = {
            logo : args.partner_input.logo,
            title : args.partner_input.title,
            about : args.partner_input.about
        }

        const new_partner = new Partner(model)
        return new_partner.save()
        .then((partner)=>{
            return {...partner._doc,_id:partner._id}
        })
        .catch((error)=>{
            throw new Error(error.message)
        })
    }
}