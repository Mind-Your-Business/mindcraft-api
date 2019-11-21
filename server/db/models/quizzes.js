const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('../db')

const Quizzes = db.define('quizzes', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  questions: {
    type: Sequelize.TEXT
  },
  answers: {
    type: Sequelize.TEXT
  },
  completedCorrectly: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Quizzes
