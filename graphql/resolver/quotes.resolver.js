const Quote = require("../../models/quotes.model");

module.exports = {
    quotes : async()=>{
        try{
            const quote_lst = await Quote.findAll()
            return quote_lst
        }
        catch(error){
            return new Error(error.message)
        }
    },
    add_quote: async(args)=>{
        const model = {
            content : args.quote_input.content,
            author : args.quote_input.author,
            designation : args.quote_input.designation
        }

        const new_quote =  await Quote.create(model)
        return new_quote
    }
}