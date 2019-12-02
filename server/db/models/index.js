const User = require('./user')
const JournalEntries = require('./journalEntries')
const Levels = require('./levels')
const UserLevel = require('./userLevel')
const Test = require('./test')

User.hasMany(JournalEntries, {constraints: false})
User.belongsToMany(Levels, {through: UserLevel})
JournalEntries.belongsTo(User, {constraints: false})
User.hasMany(Test, {constraints: false})

module.exports = {
  User,
  JournalEntries,
  Test,
  Levels
}
