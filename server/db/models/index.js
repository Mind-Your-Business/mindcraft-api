const User = require('./user')
const JournalEntries = require('./journalEntries')
const Levels = require('./levels')
const UserLevel = require('./userLevel')
const Tests = require('./tests')

User.hasMany(JournalEntries, {constraints: false})
User.belongsToMany(Levels, {through: UserLevel})
JournalEntries.belongsTo(User, {constraints: false})
User.hasMany(Tests, {constraints: false})
Tests.belongsTo(User, {constraints: false})

module.exports = {
  User,
  JournalEntries,
  Tests,
  Levels
}
