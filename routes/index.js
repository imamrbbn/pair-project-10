const router = require ("express").Router ()

// const homeRoute = require ("./homeRoute.js")
const countriesRoute = require("./countries.js")
// const travellerRoute = require ("./travellerRoute.js")


const Controller = require('../controllers/Controller.js')





router.get("/", Controller.showHomePage)

router.use("/countries" , countriesRoute)


// router.use ("/travellers", travellerRoute)

// router.use ("/", homeRoute)








































module.exports = router
