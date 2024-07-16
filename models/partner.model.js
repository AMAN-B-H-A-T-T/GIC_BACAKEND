const mongoose = require('mongoose')
const sequelize = require('../utils/postgreSQL_conn');
const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const Partner = sequelize.define("Home_partner",{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    logo: {
        type: DataTypes.STRING(100), // Matches character varying(100)
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255), // Matches character varying(255)
        allowNull: false
    },
    about: {
        type: DataTypes.TEXT, // Matches text
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(50), // Matches character varying(50)
        unique: true, // Assuming slug should be uniqu/ Automatically generate UUID for slug
        allowNull: true
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'Home_partner'
})

module.exports = Partner