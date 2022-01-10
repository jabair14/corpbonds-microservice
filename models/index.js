const dbConfig = require('../config/dbConfig')

const { Sequelize, DataTypes } = require('sequelize')


const sequelize = new Sequelize(
    {
        database: dbConfig.DB,
        username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        dialect: dbConfig.dialect,
        host: dbConfig.HOST

    }
)

sequelize.authenticate()
    .then(() => {
        console.log("connected to Postgres DB")
    })
    .catch(e => {
        console.log('unable to connect to postgres DB' + e)
    })

const db = {}

db.sequelize = sequelize

db.Bonds = require('./bondModel')(sequelize, DataTypes)

db.sequelize.sync({ force: true }).then(() => {
    console.log('DB synched with sequelize')
}).catch((error) => {
    console.log('Error syncing the DB to sequelize' + error)
})

module.exports = db 