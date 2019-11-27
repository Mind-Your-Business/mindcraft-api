const Sequelize = require('sequelize')
const db = require('../db')

const Quiz = db.define('quiz', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  questions: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },

  completedCorrectly: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  correctAnswers: {
    type: Sequelize.INTEGER,
    validate: {
      minimum: 0
    }
  },
  incorrectAnswers: {
    type: Sequelize.INTEGER,
    validate: {
      minimum: 0
    }
  }
})

Quiz.prototype.findByName = async name => {
  const quiz = await Quiz.findAll({where: name})
  return quiz
}

module.exports = Quiz
