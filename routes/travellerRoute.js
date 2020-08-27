const router = require ("express").Router ()
const TravellerController = require ("../controllers/travellerController.js")

router.get ("/", TravellerController.show)

router.get ("/add", TravellerController.addForm)
router.post ("/add", TravellerController.addPost)

router.get ("/edit/:id", TravellerController.editForm)
router.post ("/edit/:id", TravellerController.editPost)

router.get ("/delete/:id", TravellerController.delete)

module.exports = router