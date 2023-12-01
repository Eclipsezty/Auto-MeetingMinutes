const sequelize = require('./sequelize')

const dbConnection = async ()=>{
    try {
          await sequelize.authenticate();// test connecting to database
          console.log('Connection has been established successfully.');
        } catch (error) {
          console.error('Unable to connect to the database:', error);
        }
}

module.exports = dbConnection