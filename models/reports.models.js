const { DataTypes } = require("sequelize");
const sequelize = require("../utils/postgreSQL_conn");
const {v4 : uuidv4} = require('uuid')

const Reports = sequelize.define("documents_report",{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      about: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      attachment: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'documents_report'
})

module.exports = Reports