const User = require('./user')
const JournalEntries = require('./journalEntries')
const Quizzes = require('./quizzes')
const Levels = require('./levels')
const UserLevel = require('./userLevel')

User.hasMany(JournalEntries)
User.hasMany(Quizzes)
User.belongsToMany(Levels, {through: UserLevel})

JournalEntries.belongsTo(User)

module.exports = {
  User,
  JournalEntries,
  Quizzes,
  Levels
}
