const Circular = require("../../models/circulars.model");

module.exports = {
    circulars : async()=>{
        try{
            const circular_lst = await Circular.findAll()
            console.log(circular_lst)
            return circular_lst
        }
        catch(error){
            throw new Error(error.message)
        }
    }
}