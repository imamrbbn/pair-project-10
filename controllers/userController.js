const {Country, Traveller, CountryTraveller, User} = require ("../models")

class UserController {

    static login (req, res) {
        res.render ('loginForm')
    }

    static loginPost (req, res) {
        
    }

    static register (req, res) {
        res.render ('registerForm')
    }

    static registerPost (req, res) {
        
    }

    static logout (req, res) {

    }    

}

module.exports = UserController