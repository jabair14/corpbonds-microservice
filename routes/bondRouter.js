const bondController = require('../controllers/bondController.js')

const router = require('express').Router()


router.get('/', bondController.getAllBonds)
router.get('/random', bondController.getRandomBonds)

router.get('/:id', bondController.getOneBond)


//////delete these after development//////

router.delete('/:id', bondController.deleteBond)
router.post('/', bondController.addBond)

module.exports = router