const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('../db')

const JournalEntries = db.define('journalEntries', {
  date: {
    type: Sequelize.DATE
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
  entry: {
    type: Sequelize.TEXT
  }
})

module.exports = JournalEntries
