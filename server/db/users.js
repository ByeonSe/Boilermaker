// define your model here and establish assocaiton (in /db/index.js)
const Sequelize = require('sequelize')
const db = require('./database')

const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        allownULL: false
    },
    password: {
        type:Sequelize.STRING,
        // Making `.password` act like a func hides it when serializing to JSON.
         // This is a hack to get around Sequelize's lack of a "private" option.
         get() {
             return ()=> this.getDataValue('password')
         }
    },
    salt: {
        type: Sequelize.STRING,
        get() {
            return () => this.getDataValue
        }
    }
})
module.export = User