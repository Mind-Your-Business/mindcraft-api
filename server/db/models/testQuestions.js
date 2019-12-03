const Sequelize = require('sequelize')
const db = require('../db')

const TestQuestions = db.define('questions', {
 text: {
   type: Sequelize.TEXT
 },
 answer: {
   type: Sequelize.TEXT
 },
 response: {
   type: Sequelize.TEXT
 }
})

module.exports = TestQuestions
