'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Traveller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    fullName () {
      let fullname = `${this.first_name} ${this.last_name}`
      return fullname
    }

    static associate(models) {
      // define association here
      Traveller.hasMany (models.CountryTraveller)
      Traveller.belongsToMany (models.Country, {through : models.CountryTraveller})
    }
  };
  Traveller.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    asal: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Traveller',
  });
  return Traveller;
};