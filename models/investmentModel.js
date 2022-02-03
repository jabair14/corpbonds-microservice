module.exports = (sequelize, DataTypes) => {
    const Investment = sequelize.define('investment', {
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     allowNull: false,
        //     primaryKey: true,
            
        // }, 

        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            foreignKey: false
        },

        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        }


    })

    return Investment
}