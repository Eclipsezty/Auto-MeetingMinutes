const {Datatypes} = require('sequelize');
const sequelize = require('./sequelize')

const User = sequelize.define('User',{
    email:{
        type:Datatypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type: Datatypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:Datatypes.STRING,
        allowNull:false
    },
    avatar:{
        type:Datatypes.TEXT,
        allowNull:true
    },
    bio:{
        type:Datatypes.TEXT,
        allowNull:true
    }
})

module.exports(User)