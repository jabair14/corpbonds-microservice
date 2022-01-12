const investmentsController = require('../controllers/investmentController.js')

const router = require('express').Router()

router.post('/', investmentsController.addInvestment)

router.get('/', investmentsController.getAllInvestments)

module.exports = router