const bondInvestmentsController = require('../controllers/bondInvestmentController.js')

const router = require('express').Router()

router.post('/', bondInvestmentsController.addBondsInvestment)

router.get('/', bondInvestmentsController.getAllBondsInvestments)


module.exports = router