module.exports = (sequelize, DataTypes) => {
    const BondInvestment = sequelize.define('bondInvestment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        investmentId: {
            type: DataTypes.INTEGER,
            allowNull: false
            
        },

        bondId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return BondInvestment
}