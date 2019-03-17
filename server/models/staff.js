'use strict';
module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define('Staff', {
    unique: DataTypes.STRING,
    name: DataTypes.STRING,
    phone_num: DataTypes.STRING,
    address: DataTypes.STRING,
    salary: DataTypes.INTEGER
  }, {});
  Staff.associate = function(models) {
    // associations can be defined here

    
  };
  return Staff;
};