'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.notice = require('./notice')(sequelize, Sequelize) // 즉시실행함수
db.authLogin = require('./login')(sequelize, Sequelize) // 즉시실행함수
db.popup = require('./popup')(sequelize, Sequelize) // 즉시실행함수

module.exports = db;
