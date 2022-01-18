const db = require('../models/index')

const BondsInvestment = db.BondInvestments;


const addBondInvestments = async (req, res) => {
    let input_data = {
        investmentId: req.body.investmentId,
        bondId: req.body.bondId
    }

    const bondsInvestment = await BondsInvestment.create(input_data)
    res.status(200).send(bondsInvestment)
}

const getAllBondsInvestments = async (req, res) => {
    let bondsInvestments = await BondsInvestment.findAll({
        // include: db.Investments
    })
        
    res.status(200).send(bondsInvestments)
}

const getOneBondInvestment = async (req, res) => {
    let id = req.params.id

    let bondsInvestments = await BondsInvestment.findOne({where: {id: id}})
    res.status(200).send(bondsInvestments)
}

const updateBondInvestment = async (req, res) => {
    let id = req.params.id
    
    const bondInvestment = await BondsInvestment.update(req.body, { where: {id: id}})
    res.status(200).send(bondInvestment)
}

const deleteBondInvestment = async (req, res) => {
    let id = req.params.id

    await BondsInvestment.destroy({ where :{id: id}})
    res.status(200).send(`BondInvestment with id: ${id} is deleted`)
}








module.exports = {
    addBondInvestments,
    getAllBondsInvestments,
    getOneBondInvestment,
    updateBondInvestment,
    deleteBondInvestment
}