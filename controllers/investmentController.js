const db = require('../models/index')

const Investment = db.Investments

const addInvestment = async (req, res) => {
    let input_data = {
        userId: req.body.userId,
        amount: req.body.amount
    }

    const investment = await Investment.create(input_data)
    res.status(200).send(investment)
}

const getAllInvestments = async (req, res) => {
    let investments = await Investment.findAll({})
    res.status(200).send(investments)
}







module.exports = {
    addInvestment,
    getAllInvestments
}