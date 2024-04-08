const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()
const { connect_db } = require('./utils/db_connect');
const {graphqlHTTP} = require('express-graphql')

//import the schema for the graphql
const schemas = require('./graphql/schema')
const {rootResolver} = require("./graphql/resolver");
const { auth } = require('./utils/auth-middleware');

//import the resolvers for the graphql

// initilized the port, for handling all kinds of request on server
const PORT = 4000;
// initilized the express server 
const app = express()

try{
    
    // establish the connection with database
    connect_db()
    // include the body parser middleware
    app.use(bodyParser.json())
    //setup the cors 
    app.use(cors())
    // api for managing the user login functionality 
    app.use("/api/manage",require('./routes/profile.route'))

    //setup the middleware to authenticat user requests
    app.use(auth)

    // setup the graphql endpoint
    app.use("/manage",graphqlHTTP({
        schema: schemas,
        rootValue: rootResolver,
        graphiql: true
    }))

    app.use((err,req,res,next)=>{
        console.error(err.stack);
        res.status(500).send(err.stack);
    })
}
catch(error){
    console.log(error.message)
}

// listen the requests on the port 
app.listen(PORT,()=>{
    console.log("http://localhost:4000")
})