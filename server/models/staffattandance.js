'use strict';
module.exports = (sequelize, DataTypes) => {
  const StaffAttandance = sequelize.define('StaffAttandance', {
    month: DataTypes.STRING,
    year: DataTypes.STRING,
    attandance: DataTypes.STRING,
    update: DataTypes.INTEGER
  }, {});
  StaffAttandance.associate = function(models) {
    // associations can be defined here
  };
  return StaffAttandance;
};