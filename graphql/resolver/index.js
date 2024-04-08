const rootResolver = {
    hello: ()=>{
        console.log("first")
        return ("hello user..!")
    }
}
module.exports = {rootResolver}