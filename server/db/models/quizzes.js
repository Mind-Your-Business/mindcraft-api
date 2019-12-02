const Sequelize = require('sequelize')
const db = require('../db')

const Quizzes = db.define('quizzes', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Quizzes
