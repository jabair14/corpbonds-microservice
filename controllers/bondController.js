const db = require('../models/index')

const Bond = db.Bonds

const getAllBonds = async (req, res) => {
    let bonds = await Bond.findAll({})
    res.status(200).send(bonds)
}

const getOneBond = async (req, res) => {
    let id = req.params.id
    let bonds = await Bond.findOne({where: {id: id}})
    res.status(200).send(bonds)
}

///////delete this later, just for testing

// const addBond = async (req, res) => {
//     let input_data = {
//         bondSymbol: req.body.bondSymbol,
//         issuerName: req.body.issuerName,
//         interestRate: req.body.interestRate,
//         maturityDate: req.body.maturityDate,
//         faceValue: req.body.faceValue,
//         underlying: req.body.underlying,
//         altSymbol: req.body.altSymbol,
//         suffix: req.body.suffix,
//         issueType: req.body.issueType,
//         bypassClearance: req.body.bypassClearance,
//         currencyCode: req.body.currencyCode,
//         flat: req.body.flat,
//         bankrupt: req.body.bankrupt,
//         exchange: req.body.exchange
//     }
//     const bond = await Bond.create(input_data)
//     res.status(200).send(bond)
// }

// const deleteBond = async (req, res) => {
//     let id = req.params.id

//     await Bond.destroy({ where :{id: id}})
//     res.status(200).send(`bond with id: ${id} is deleted`)
// }

module.exports = {
    // addBond,
    // deleteBond,
    getAllBonds,
    getOneBond,
}