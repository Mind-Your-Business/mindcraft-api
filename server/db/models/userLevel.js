const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('../db')
// const {User, JournalEntries, Levels} = require('/')

const UserLevel = db.define('userLevel', {
  userId: Sequelize.INTEGER,
  levelId: Sequelize.INTEGER
})

//use on api routes:
// UserLevel.prototype.checkLevel = function(user){
//   let currentLevel = user.levelId;
//   let nextLevel = currentLevel+1;
//   let checkMeditations = user.meditations>=nextLevel.meditations
//   let checkEntries = user.entries>=nextLevel.entries
//   let checkQuizzes = user.quizzes>=nextLevel.quizzes
//   if(checkMeditations&&checkQuizzes&&checkEntries){
//     user.level=nextLevel
//   }
// }

module.exports = UserLevel
