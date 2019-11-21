const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('../db')

const UserLevel = db.define('userLevel', {
  userId: Sequelize.INTEGER,
  levelId: Sequelize.INTEGER
})

module.exports = UserLevel
