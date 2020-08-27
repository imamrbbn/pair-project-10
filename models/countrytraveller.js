'use strict';
const duration = require('../helpers/duration.js')
const dateHumanFormat = require('../helpers/dateHumanFormat.js')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CountryTraveller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    get duration() {
      return duration(this.tanggal_keberangkatan, this.tanggal_pulang)
    } 
     
    static associate(models) {
      // define association here
      CountryTraveller.belongsTo (models.Country)
      CountryTraveller.belongsTo (models.Traveller)
    }
  };
  CountryTraveller.init({
    CountryId: DataTypes.INTEGER,
    TravellerId: DataTypes.INTEGER,
    total_biaya: DataTypes.INTEGER,
    tanggal_keberangkatan: DataTypes.DATE,
    tanggal_pulang: DataTypes.DATE,
    nomor_registrasi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CountryTraveller',
    hooks: {
      beforeCreate: (user,option)=> {
        user.nomor_registrasi = `001-${user.tanggal_keberangkatan}-${user.tanggal_keberangkatan}`
      }
    },
  });
  return CountryTraveller;
};