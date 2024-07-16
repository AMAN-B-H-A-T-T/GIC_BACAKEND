const startup_resolver = require('./startup.resolver')
const partner_resolver = require('./partner.resolver')
const quote_resolver = require('./quotes.resolver')
const inquire_resolver = require('./inquire.resolver')
const incubation_resolver = require('./incubation.resolver')
const reachout_resolver = require('./reachout.resolver')
const circular_resolver = require('./documents.reslover')

const rootResolver = {
    hello: ()=>{
    
        return ("hello user..!")
    },
    ...startup_resolver,
    ...partner_resolver,
    ...quote_resolver,
    ...inquire_resolver,
    ...incubation_resolver,
    ...reachout_resolver,
    ...circular_resolver
}
module.exports = {rootResolver}