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
    let investments = await Investment.findAll({
        include: db.Bonds
    })
    res.status(200).send(investments)
}

const getOneInvestment = async (req, res) => {
    let id = req.params.id

    let investments = await Investment.findOne({ where: {userId: id},
        include: db.Bonds
    })

    res.status(200).send(investments)
}

const updateInvestment = async (req, res) => {
    let id = req.params.id

    const investment = await Investment.update( req.body, {where: { id: id }})
    res.status(200).send(investment)
}

const deleteInvestment = async (req, res) => {
    let id = req.params.id

    await Investment.destroy({where :{id: id}})
    res.status(200).send(`investment with id: ${id} is deleted`)
}







module.exports = {
    addInvestment,
    getAllInvestments,
    getOneInvestment,
    updateInvestment,
    deleteInvestment
}