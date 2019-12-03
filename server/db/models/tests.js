const Sequelize = require('sequelize')
const db = require('../db')

const Tests = db.define('tests', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  completedCorrectly: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  correctAnswers: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  incorrectAnswers: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

Tests.prototype.findByName = async name => {
  const quiz = await Tests.findAll({where: name})
  return quiz
}

module.exports = Tests
