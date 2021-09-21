const Sequelize = require('sequelize');
const config = require('../config/config.json');
const member = require('./member');

const {
  username, password, database, host, dialect,
} = config.development;
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

// require('./member'); // member.js에 있던 함수 갖고옴
const Member = require('./member')(sequelize, Sequelize.DataTypes);

const db = {};
db.Member = Member;

module.exports = db;
