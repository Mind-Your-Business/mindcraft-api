const Sequelize = require('sequelize')
const db = require('../db')

const Tests = db.define('tests', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Tests
