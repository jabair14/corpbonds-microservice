// const { DataTypes } = require("sequelize/dist");

module.exports = (sequelize, DataTypes) => {

    const Bond = sequelize.define('bond', {
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     allowNull: false,
        //     primaryKey: true,
        //     // createdAt: false,
        //     // updatedAt: false,
        //     // timestamps: false,
        // },
        bondSymbol: {
            type: DataTypes.STRING,
            allowNull: false,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false,
        },
        issuerName: {
            type: DataTypes.STRING,
            allowNull: false,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false, 
        },
        interestRate: {
            type: DataTypes.FLOAT,
            allowNull: false,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false,
        },
        maturityDate: {
            type: DataTypes.DATE,
            allowNull: false,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false,
        },
        faceValue: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false,
        },
        underlying: {
            type: DataTypes.STRING,
            allowNull: true,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false,
        },
        altSymbol: {
            type: DataTypes.STRING,
            allowNull: true,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false,
        },
        suffix: {
            type: DataTypes.STRING,
            allowNull: true,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false,
        },
        issueType: {
            type: DataTypes.STRING,
            allowNull: true,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false,
        },
        bypassClearance: {
            type: DataTypes.STRING,
            allowNull: true,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false,
        },
        currencyCode: {
            type: DataTypes.STRING,
            allowNull: false,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false,
        },
        flat: {
            type: DataTypes.STRING,
            allowNull: true,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false,
        },
        bankrupt: {
            type: DataTypes.STRING,
            allowNull: true,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false,
        },
        exchange: {
            type: DataTypes.STRING,
            allowNull: false,
            // createdAt: false,
            // updatedAt: false,
            // timestamps: false,
        }, 
    
    })

    return Bond
}
