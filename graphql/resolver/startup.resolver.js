const Startup = require("../../models/startup.model")

module.exports = {
    startups : async()=>{
            try{
                const starups_lst = await Startup.findAll()
                return starups_lst
            }
            catch(error){
                throw new Error(error.message)
            }
    },
    add_startup: async(args)=>{
        try{
            const model = {
                title : args.startup_input.title,
                content : args.startup_input.count
            }
    
            const new_startup = await Startup.create(model) 
            return new_startup
        }
        catch(error){
            throw new Error(error.message)
        }
        
    }
}