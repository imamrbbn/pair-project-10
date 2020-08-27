'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Countries', [
     {
      name: "Turkey",
      capital: "Ankara",
      language: "	Turkish",
      currency:"Turkish lira (TRY)",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: "Australia",
      capital: "Canberra",
      language: "	English",
      currency: "Australian dollar (AUD)",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: "China",
      capital: "Beijing",
      language: "Standard Chinese",
      currency: "Yuan (CNY)",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: "India",
      capital: "New Delhi",
      language: "Hindi",
      currency: "Indian rupee (INR)",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: "Japan",
      capital: "Tokyo",
      language: "Japanese",
      currency: "Japanese yen (JPY)",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: "Malaysia",
      capital: "Kuala Lumpur",
      language: "Malay",
      currency: "Ringgit (MYR)",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: "Singapore",
      capital: "Singapore",
      language: "Malay",
      currency: "Singapore dollar (SGD)",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: "Thailand",
      capital: "Bangkok",
      language: "Thai",
      currency: "Baht (THB)",
      createdAt: new Date(),
      updatedAt: new Date()
     },
    ], {});
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Countries', null, {});
  }
};
