const dbconnection = require('../db/connection')
const sequelize = require('../db/sequelize')
const User = require('../db/model_user')
const Record = require('../db/model_user_record')


const initRelation = ()=>{
    User.hasMany(Record,{
        //if user is deleted, the record will be deleted as well
        onDelete:'CASCADE'
    })
    Record.belongsTo(User)
}

const initDB = ()=>{
    return new Promise(async (resolve, reject) => {
        try {
            await dbconnection()

            initRelation()
            //sync all models and relations
            await sequelize.sync({alter:true})
            resolve()
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

module.exports = initDB