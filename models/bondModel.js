// const { DataTypes } = require("sequelize/dist");

module.exports = (sequelize, DataTypes) => {

    const Bond = sequelize.define('bond', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        bondSymbol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        issuerName: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        interestRate: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        maturityDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        faceValue: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        underlying: {
            type: DataTypes.STRING,
            allowNull: true
        },
        altSymbol: {
            type: DataTypes.STRING,
            allowNull: true
        },
        suffix: {
            type: DataTypes.STRING,
            allowNull: true
        },
        issueType: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bypassClearance: {
            type: DataTypes.STRING,
            allowNull: true
        },
        currencyCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flat: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bankrupt: {
            type: DataTypes.STRING,
            allowNull: true
        },
        exchange: {
            type: DataTypes.STRING,
            allowNull: false
        }
    
    })

    return Bond
}
