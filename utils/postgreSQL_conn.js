const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("gic-main","gic_pgadmin","iPznbrTroy2Qveh", {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

try{
    sequelize.authenticate();
    console.log("connection establish successfully")
}
catch(error){
    console.log(error.message)
    process.exit(-1)
}
module.exports = sequelize;
