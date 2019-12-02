const User = require('./user')
const JournalEntries = require('./journalEntries')
const Quizzes = require('./quizzes')
const Levels = require('./levels')
const UserLevel = require('./userLevel')
const Quiz = require('./quiz')

User.hasMany(JournalEntries, {constraints: false})
User.belongsToMany(Levels, {through: UserLevel})
JournalEntries.belongsTo(User, {constraints: false})
Quiz.belongsTo(Quizzes, {constraints: false})
Quizzes.hasMany(Quiz, {constraints: false})

module.exports = {
  User,
  JournalEntries,
  Quizzes,
  Quiz,
  Levels
}
