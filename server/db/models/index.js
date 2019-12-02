const User = require('./user')
const JournalEntries = require('./journalEntries')
const Quizzes = require('./quizzes')
const Levels = require('./levels')
const UserLevel = require('./userLevel')
const Test = require('./test')

User.hasMany(JournalEntries, {constraints: false})
User.belongsToMany(Levels, {through: UserLevel})
JournalEntries.belongsTo(User, {constraints: false})
Quizzes.hasMany(Test, {constraints: false})
Test.belongsTo(Quizzes, {constraints: false})

module.exports = {
  User,
  JournalEntries,
  Quizzes,
  Test,
  Levels
}
