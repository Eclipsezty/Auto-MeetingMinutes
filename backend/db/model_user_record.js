const {Datatypes} = require('sequelize');
const sequelize = require('./sequelize')

const Record = sequelize.define('Record', {
    email: {
        type: Datatypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true
    },
    Content: {
        type: Datatypes.STRING,
    }
})

module.exports(Record)