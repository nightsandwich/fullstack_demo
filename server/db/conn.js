//db code pg server
const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/fullstack_demo_db');

module.exports = conn;