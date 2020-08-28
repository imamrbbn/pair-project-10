'use strict';
const fs = require ("fs")

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const dataTraveller = JSON.parse (fs.readFileSync ("./seeders/dataTraveller.json", "utf-8"))
   dataTraveller.forEach (el => {
     el.createdAt = new Date (),
     el.updatedAt = new Date () 
   })

   return queryInterface.bulkInsert ("Travellers", dataTraveller)
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return queryInterface.bulkDelete ("Travellers", null, {})
  }
};
