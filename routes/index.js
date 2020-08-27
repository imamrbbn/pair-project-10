const router = require ("express").Router ()

const homeRoute = require ("./homeRoute.js")

const travellerRoute = require ("./travellerRoute.js")












router.use ("/travellers", travellerRoute)

router.use ("/", homeRoute)








































module.exports = router
