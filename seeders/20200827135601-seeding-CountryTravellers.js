'use strict';

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
   return queryInterface.bulkInsert('CountryTravellers', [
    {
      CountryId:1,
      TravellerId: 1,
      total_biaya: 30000000,
      tanggal_keberangkatan: new Date(),
      tanggal_pulang: new Date(),
      nomor_registrasi: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      CountryId:1,
      TravellerId: 2,
      total_biaya: 30000000,
      tanggal_keberangkatan: new Date(),
      tanggal_pulang: new Date(),
      nomor_registrasi: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('CountryTravellers', null, {});
  }
};
