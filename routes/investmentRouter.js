const investmentsController = require('../controllers/investmentController.js')

const router = require('express').Router()

router.post('/', investmentsController.addInvestment)

router.get('/', investmentsController.getAllInvestments)

router.get('/:id', investmentsController.getOneInvestment)

router.put('/:id', investmentsController.updateInvestment)

router.delete('/:id', investmentsController.deleteInvestment)

module.exports = router