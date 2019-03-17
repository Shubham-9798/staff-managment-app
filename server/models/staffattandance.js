'use strict';
module.exports = (sequelize, DataTypes) => {
  const StaffAttandance = sequelize.define('StaffAttandance', {
    date: DataTypes.STRING,
    month: DataTypes.STRING,
    year: DataTypes.STRING,
    attandance: DataTypes.STRING,
    update: DataTypes.INTEGER,
    staffUnique: DataTypes.STRING
  }, {});
  StaffAttandance.associate = function(models) {
   //dd
  };
  return StaffAttandance;
};