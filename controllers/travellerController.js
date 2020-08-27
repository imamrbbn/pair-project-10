const {Country, Traveller} = require ("../models")

class TravellerController {

    static show (req, res) {
        Traveller.findAll ({
            order : [["id", "ASC"]]
        })

        .then (data => {
            // res.send (data)
            res.render ("travellerList", {data})
        })

        .catch (err => {
            res.send (err)
        })
    }

    static addForm (req, res) {
        res.render ("addTravellerForm")
    }

    static addPost (req, res) {
        let params = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            asal : req.body.asal,
            gender : req.body.gender
        }

        Traveller.create (params)

        .then (data => {
            res.redirect ("/travellers")
        })

        .catch (err => {
            res.send (err)
        })       
    }

    static editForm (req, res) {

        Traveller.findByPk (req.params.id)

        .then (data => {
            // res.send (data)
            res.render ("editTravellerForm", {data})
        })
        
        .catch (err => {
            res.send (err)
        })
    }

    static editPost (req, res) {
        let params = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            asal : req.body.asal,
            gender : req.body.gender
        }

        Traveller.update (params, {
            where : {id : req.params.id}
        })

        .then (data => {
            // res.send (data)
            res.redirect ("/travellers")
        })

        .catch (err => {
            res.redirect (`/travellers/edit/${req.params.id}`)
        })
    }

    static delete (req, res) {
        Traveller.destroy ({
            where : {id : req.params.id}
        })
        
        .then (data => {
            res.redirect ("/travellers")
        })

        .catch (err => {
            res.send (err)
        })
    }

    

}

module.exports = TravellerController