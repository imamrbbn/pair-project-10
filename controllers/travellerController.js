const {Country, Traveller, CountryTraveller} = require ("../models")
const dateHumanFormat = require('../helpers/dateHumanFormat.js')
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
            res.send(err)
        })
    }

    static addTravelPlanForm (req, res) {
        let listTravel = null
        let country = null

        Traveller.findByPk (req.params.id)

        .then (data => {
            listTravel = data
            return Country.findAll ()
        })

        .then (data => {
            country = data
            return CountryTraveller.findAll ({
                include : [Traveller],
                where : {
                    TravellerId : req.params.id
                }
            })
        })

        .then (data => {
            res.render ("addTravelPlanForm", {data, listTravel, country})
        })

        .catch (err => {
            res.send (err)
        })

    }

    static addTravelPlanPost (req, res) {
        let params = {
            TravellerId : req.params.id,
            CountryId : req.body.CountryId,
            tanggal_keberangkatan : new Date (req.body.tanggal_keberangkatan),
            tanggal_pulang : new Date (req.body.tanggal_pulang)
        }
        CountryTraveller.create (params)
            .then (data => {
                console.log(data);
                res.redirect (`/travellers/seeTravelPlan/${req.params.id}`)
            })

            .catch (err => {
                res.send (err)
            })
        
    }

    static seeTravelPlan (req, res) {
        CountryTraveller.findAll ({
            include : [Country, Traveller],
            where : {TravellerId : req.params.id}

        })

        .then (data => {
            let date = [ ]
            // data.forEach(e => {
            //     e.tanggal_keberangkatan = dateHumanFormat(e.tanggal_keberangkatan)
            //     date.push(dateHumanFormat(e.tanggal_pulang))
            //     console.log(dateHumanFormat(e.tanggal_pulang));
            // });
            // console.log(data[]);
            res.render ("seeTravelPlan", {data,date})
        })

        .catch (err => {
            res.send (err)
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