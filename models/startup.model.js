const mongoose = require('mongoose')
const sequelize = require('../utils/postgreSQL_conn')
const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid');

const Startup = sequelize.define('Home_stats',{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true // Assuming slug is optional based on your SQL statement
      },
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'Home_stats'
})

module.exports = Startup