const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const {
  username, password, database, host, dialect,
} = config;
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

// require('./member'); // member.js에 있던 함수 갖고옴
const Member = require('./member')(sequelize, Sequelize.DataTypes);

const db = {};
db.Member = Member;

module.exports = db;