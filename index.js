const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()
const { connect_db } = require('./utils/db_connect');
// initilized the port, for handling all kinds of request on server
const PORT = 4000;
// initilized the express server 
const app = express()





try{
    // include the body parser middleware
    app.use(bodyParser.json())
    //setup the cors 
    app.use(cors())
    app.use("/api/manage",require('./routes/profile.route'))
    connect_db()
}
catch(error){
    console.log(error.message)
}

// listen the requests on the port 
app.listen(PORT,()=>{
    console.log("http://localhost:4000")
})