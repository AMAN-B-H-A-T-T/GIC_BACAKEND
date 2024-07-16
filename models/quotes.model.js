const mongoose = require('mongoose')
const sequelize = require('../utils/postgreSQL_conn')
const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid');

const Quote = sequelize.define('Home_quote',{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING(100), // Matches character varying(100)
        allowNull: false
    },
    designation: {
        type: DataTypes.STRING(100), // Matches character varying(100)
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT, // Matches text
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(50), // Matches character varying(50)
        unique: true, // Assuming slug should be unique
        allowNull: true
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'Home_quote'
})

module.exports = Quote