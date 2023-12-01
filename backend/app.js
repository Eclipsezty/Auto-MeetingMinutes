require('dotenv').config({path:".env"})
const initDB = require('./src/init/initDB')
const initServer = require('./src/init/initServer')
const express = require('express')
const app = express()


const main = async() =>{
    await initDB()

    await initServer(app)

}