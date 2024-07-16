const mongoose = require('mongoose')
const sequelize = require('../utils/postgreSQL_conn')
const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid');

const Circular = sequelize.define('documents_circular',{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255), // Adjusted to match character varying(255)
        allowNull: false
    },
    about: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    attachment: {
        type: DataTypes.STRING(100), // Adjusted to match character varying(100)
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY, // Adjusted to match date type
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(50), // Adjusted to match character varying(50)
        allowNull:true,
        unique : true
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'documents_circular'
})


module.exports = Circular