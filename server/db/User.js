//const Sequelize = require('sequelize');
const conn = require('./conn');
const { STRING } = conn.Sequelize; //so you dont need to require sequelize again

const User = conn.define('user', {
    name: STRING 
  });
  
module.exports = User;