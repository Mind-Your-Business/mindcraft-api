const Sequelize = require('sequelize')
const db = require('../db')

const Levels = db.define('levels', {
  number: Sequelize.INTEGER,
  meditations: Sequelize.INTEGER,
  quizzes: Sequelize.INTEGER,
  entries: Sequelize.INTEGER
})

module.exports = Levels
