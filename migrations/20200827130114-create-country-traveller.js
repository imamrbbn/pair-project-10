'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CountryTravellers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // CountryId: {
      //   type: Sequelize.INTEGER
      // },
      // TravellerId: {
      //   type: Sequelize.INTEGER
      // },
      total_biaya: {
        type: Sequelize.INTEGER
      },
      tanggal_keberangkatan: {
        type: Sequelize.DATE
      },
      tanggal_pulang: {
        type: Sequelize.DATE
      },
      nomor_registrasi: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CountryTravellers');
  }
};