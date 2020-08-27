const router = require ("express").Router ()

router.get ("/", (req, res) => {
    // res.send ("this is home")
    res.render ("home")
})

module.exports = router