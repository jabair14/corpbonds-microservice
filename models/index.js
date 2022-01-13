const dbConfig = require('../config/dbConfig')

const { Sequelize, DataTypes } = require('sequelize')


const sequelize = new Sequelize(
    {
        database: dbConfig.DB,
        username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        dialect: dbConfig.dialect,
        host: dbConfig.HOST,
        define: {
            timestamps: false
        }

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
db.Investments = require('./investmentModel')(sequelize, DataTypes)
db.BondInvestments = require('./bondInvestmentModel')(sequelize, DataTypes)
db.Users = require('./userModel')(sequelize, DataTypes)

db.sequelize.sync({ force: false }).then(() => {
    console.log('DB synched with sequelize')
}).catch((error) => {
    console.log('Error syncing the DB to sequelize' + error)
})

db.Bonds.belongsToMany(db.Investments, {through: db.BondInvestments})
db.Investments.belongsToMany(db.Bonds, {through: db.BondInvestments})

db.Users.hasMany(db.Investments)
db.Investments.belongsTo(db.Users)




module.exports = db 