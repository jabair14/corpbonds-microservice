const bondInvestmentsController = require('../controllers/bondInvestmentController.js')

const router = require('express').Router()

router.post('/', bondInvestmentsController.addBondInvestments)

router.get('/', bondInvestmentsController.getAllBondsInvestments)

router.get('/:id', bondInvestmentsController.getOneBondInvestment)

router.put('/:id', bondInvestmentsController.updateBondInvestment)

router.delete('/:id', bondInvestmentsController.deleteBondInvestment)


module.exports = router