const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('../db')

const JournalEntries = db.define('journalEntries', {
  date: {
    type: Sequelize.DATE,
    defaultValue: new Date()
  },
  mood: {
    type: Sequelize.STRING,
    validate: {
      [Op.contains]: [
        'okay',
        'good',
        'great',
        'very good',
        'awful',
        'not good',
        'bad'
      ]
    }
  },
  favorite: {
    type: Sequelize.STRING
  },
  least: {
    type: Sequelize.STRING
  },
  hoursSlept: {
    type: Sequelize.FLOAT
  },
  entry: {
    type: Sequelize.TEXT
  }
})

JournalEntries.prototype.current = function() {
  let entry = this.createdAt.split('T')[0]
  let today = JSON.stringify(new Date()).split('T')[0]

  if (entry < today) {
    return false
  } else {
    return true
  }
}

module.exports = JournalEntries
