const Circular = require("../models/circulars.model");
const Incubation = require("../models/incubation.model");
const Inquire = require("../models/inquires.model");
const Partner = require("../models/partner.model");
const User = require("../models/profile.model");
const Quote = require("../models/quotes.model");
const Reachout = require("../models/reachout.models");
const Reports = require("../models/reports.models");
const Startup = require("../models/startup.model");

const sequelize = require("./postgreSQL_conn");

async function syncDatabase(){
    try{
        await sequelize.sync({force : true})
        console.log("database sync successfully")
    }
    catch(error){
        console.log(error.message)
    }
    finally{
        await sequelize.close();
    }
}

syncDatabase()