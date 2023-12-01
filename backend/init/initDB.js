const dbconnection = require('../db/connection')

const initDB = ()=>{
    return new Promise(async (resolve, reject) => {
        try {
            await dbconnection()
            resolve()
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

module.exports = initDB