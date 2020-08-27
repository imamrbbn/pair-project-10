const authorization = (req, res, next) => {
    if (req.session.username ) {
        next ()
        
    } else {
        req.app.locals.errors = `Session Ended. You must log in to continue`
        res.redirect ("/users/login")
    }
    
}

module.exports = authorization