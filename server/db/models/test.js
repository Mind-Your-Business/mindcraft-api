const Sequelize = require('sequelize')
const db = require('../db')

const Test = db.define('test', {
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

Test.prototype.findByName = async name => {
  const quiz = await Test.findAll({where: name})
  return quiz
}

module.exports = Test
