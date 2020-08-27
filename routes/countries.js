const router  = require('express').Router()
const CountryController = require('../controllers/CountryController.js')

router.get('/', CountryController.showCountries)
router.get('/add', CountryController.addForm)
router.post('/add', CountryController.add)
router.get('/edit/:id', CountryController.editForm)
router.post('/edit/:id', CountryController.edit)
router.get('/delete/:id', CountryController.delete)


module.exports = router