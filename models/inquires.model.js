const mongoose = require('mongoose')
const sequelize = require('../utils/postgreSQL_conn')
const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid');


const Inquire = sequelize.define("Notifications_inquiry",{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull : false
      },
      email: {
        type: DataTypes.STRING(254),
        allowNull: false,
      },
      startUpTitle: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      contact: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      incorporated: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      startupStage: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      neededSupport: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      incubated: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      teamSize: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      raisedFundAmount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fundingAgency: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      pitchDeckUrl: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      slug: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true
      },

},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'documents_circular'
})

// sequelize.query(`
//     ALTER TABLE "public"."documents_circular"
//     ADD CONSTRAINT "notifications_inquiry_raised_fund_amount_check"
//     CHECK ("raisedFundAmount" >= 0);
// `).then(() => {
//     console.log('Raised fund amount check constraint added successfully.');
// }).catch(err => {
//     console.error('Error adding raised fund amount check constraint:', err);
// });

// // Adding check constraint for team_size >= 0
// sequelize.query(`
//     ALTER TABLE "public"."documents_circular"
//     ADD CONSTRAINT "notifications_inquiry_team_size_check"
//     CHECK ("teamSize" >= 0);
// `).then(() => {
//     console.log('Team size check constraint added successfully.');
// }).catch(err => {
//     console.error('Error adding team size check constraint:', err);
// });

module.exports = Inquire