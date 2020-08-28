const {Country, Traveller, CountryTraveller, User} = require ("../models")
const bcrypt = require('bcryptjs');
const sendMailRegister = require('../helpers/sendEmail.js')

class UserController {

    static login (req, res) {
        let errors =  req.app.locals.errors
        delete req.app.locals.errors

        res.render ('loginForm', {errors})
    }

    static loginPost (req, res) {
        User.findOne ({
            where : {username : req.body.username}
        })
        
        .then (data => {
            if (data) {
                let check = bcrypt.compareSync (req.body.password, data.password)

                if (check == true) {
                    req.session.username = data.username
                    res.redirect ("/")

                } else {
                    res.app.locals.errors = `Username or password is wrong`
                    res.redirect ("/users/login")
                }

            } else {
                res.app.locals.errors = `Username or password is wrong`
                res.redirect ("/users/login")

            }

        })

        .catch (err => {
            res.send (err)

        })
    }

    static register (req, res) {
        res.render ('registerForm')
    }

    static registerPost (req, res) {
        let params = {
            username : req.body.username,
            email: req.body.email,
            password : req.body.password
        }

        User.create (params) 

        .then (data => {
            res.redirect ("/user/login")
            sendMailRegister(data.email)
        })
        .catch (err => {
            res.send ({
                'success': false,
                'code': 500,
                'message': 'An error has occured',
                'data': ''
              })
            })
    }

   

    static logout (req, res) {

    }    

}

module.exports = UserController