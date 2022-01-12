const db = require('../models/index')

const BondsInvestment = db.BondInvestments;


const addBondsInvestment = async (req, res) => {
    let input_data = {
        investmentId: req.body.investmentId,
        bondId: req.body.bondId
    }

    const bondsInvestment = await BondsInvestment.create(input_data)
    res.status(200).send(bondsInvestment)
}

const getAllBondsInvestments = async (req, res) => {
    let bondsInvestments = await BondsInvestment.findAll({})
    res.status(200).send(bondsInvestments)
}








module.exports = {
    addBondsInvestment,
    getAllBondsInvestments,
}