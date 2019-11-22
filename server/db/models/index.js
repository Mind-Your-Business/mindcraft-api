const User = require('./user')
const JournalEntries = require('./journalEntries')
const Quizzes = require('./quizzes')
const Levels = require('./levels')
const UserLevel = require('./userLevel')

User.hasMany(JournalEntries, {constraints: false})
JournalEntries.belongsTo(User, {constraints: false})
User.hasMany(Quizzes)
User.belongsToMany(Levels, {through: UserLevel})

module.exports = {
  User,
  JournalEntries,
  Quizzes,
  Levels
}
