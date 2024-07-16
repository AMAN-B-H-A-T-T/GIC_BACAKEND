const mongoose = require('mongoose')
const sequelize = require('../utils/postgreSQL_conn')
const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid');

const Incubation = sequelize.define("Notifications_incubation",{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull : false
      },
      startUpTitle: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      foundersName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      foundersEmail: {
        type: DataTypes.STRING(254),
        allowNull: false,
      },
      foundersContact: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      coFoundersName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      coFoundersEmail: {
        type: DataTypes.STRING(254),
        allowNull: true,
      },
      coFoundersContact: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      teamSize: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      domain: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      incubationFormUrl: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      aadharUrl: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true
      },
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'Notifications_incubation'
})

// sequelize.query(`
//     ALTER TABLE "Notifications_incubation"
//     ADD CONSTRAINT "Notifications_incubation_team_size_check"
//     CHECK (teamSize >= 0);
// `).then(() => {
//     console.log('Check constraint added successfully.');
// }).catch(err => {
//     console.error('Error adding check constraint:', err);
// });

module.exports = Incubation