'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn ("CountryTravellers", "CountryId", {
      type : Sequelize.INTEGER,
      references : {
        model: "Countries",
        key : "id"
      },
      onUpdate : "CASCADE",
      onDelete : "CASCADE"

    }).then (()=> {
      queryInterface.addColumn ("CountryTravellers", "TravellerId", {
        type : Sequelize.INTEGER,
        references : {
          model: "Travellers",
          key : "id"
        },
        onUpdate : "CASCADE",
        onDelete : "CASCADE"
  
      })

    })
    .catch (err => {
      console.log (err)
    })
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn ("CountryTravellers", "CountryId")

    .then (() => {
      return queryInterface.removeColumn ("CountryTravellers", "TravellerId")
    })
  }
};
