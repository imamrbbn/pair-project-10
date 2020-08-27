const {Country} = require('../models')

class CountryController {

    static showCountries(req,res){
        console.log("masuk");
        Country.findAll({
            order: [['id', 'ASC']],
        })
           .then(data => {
               res.render('countriesPage',{data})
           })
           .catch(err => {
               console.log(err);
               res.send(err)
           })
        }

        static addForm(req, res){
            res.render('addCountriesPage')
        }

        static add(req, res){
            const params = { 
                name:req.body.name,
                capital:req.body.capital,
                currency:req.body.currency,
                language:req.body.language
             }
             Country.create(params)
                .then(() => res.redirect('/countries'))
                .catch(err => {
                    console.log(err);
                    res.send(err)
                })
        }


        static editForm(req, res){
            Country.findOne({
                where: {id : +req.params.id},
            })
                .then(data => {
                    res.render('editCountriesPage',{data})
                })
                .catch(err => {
                    console.log(err)
                    res.send(err)
                })
        }

        static edit(req,res){
                Country.findOne( {
                    where: {id : +req.params.id},
                })
                .then(data => {
                    const params = { 
                        name:req.body.name,
                        capital:req.body.capital,
                        currency:req.body.currency,
                        language:req.body.language
                     }
                     data.update(params)
                    res.redirect('/countries')
                })
                .catch(err => {
                    console.log(err)
                    res.send(err)
                })
        }

        static delete(req,res) {
            Country.destroy( {
                where: {id: +req.params.id}
            })
            .then(data => {
                res.redirect(`/countries`)
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
        }

}

module.exports = CountryController