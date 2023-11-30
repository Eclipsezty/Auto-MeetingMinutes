require('dotenv').config({path:".env"})

const express = require('express')
const {Sequelize} = require('sequelize')
const app = express()


const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    dialect:process.env.DB_DIALECT,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    logging:false
})

console.log(process.env.DB_PORT)
console.log(process.env.DB_DIALECT)

const dbConnection = async ()=>{
    try {
  await sequelize.authenticate();// test connecting to database
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

const initServer = async() =>{
    return new Promise((resolve,reject)=>{
        const PORT = process.env.PORT || 8080
        app.listen(PORT,()=>{
            console.log('Server is running on http://localhost:${PORT}');
        })
            .on('error',(error) =>{
                console.log(error);
                reject()
            })
    })
}



const main = async() =>{
    await dbConnection()

    await initServer()

}