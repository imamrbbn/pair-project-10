'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Country.hasMany (models.CountryTraveller)
      Country.belongsToMany (models.Traveller, {through : models.CountryTraveller})
    }
  };
  Country.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args:true,
          msg: `Must input country name!`,
        },
      },
    },
    capital:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args:true,
          msg: `Must input capital!`,
        },
      },
    },
    currency: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args:true,
          msg: `Must input currency!`,
        },
      },
    },
    language: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args:true,
          msg: `Must input language!`,
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};