const mongoose = require('mongoose')
const sequelize = require('../utils/postgreSQL_conn')
const { DataTypes } = require('sequelize')
const {v4: uuidv4} = require('uuid')
const User = sequelize.define("User",{
    slug : {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
    },
    user_name : {
        type:DataTypes.STRING,
        allowNull:false
    },
    user_email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique : true
    },
    user_contact: {
        type:DataTypes.STRING,
        allowNull:false
    },
    user_password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    session_id: {
        type:DataTypes.STRING,
        allowNull:true
    },
    is_session_active : {
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue : false
    }
})

module.exports = User