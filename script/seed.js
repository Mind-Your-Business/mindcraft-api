'use strict'

const db = require('../server/db')
const {User, JournalEntries, Levels, Quiz} = require('../server/db/models')
const quizData = require('./quizDummyData')

const users = [
  {
    name: 'Zell',
    email: 'testing1@gmail.com',
    password: '12345678',
    totalMeditations: 7,
    totalJournalEntries: 3,
    userLevel: 3
  },
  {
    name: 'Vincy',
    email: 'testing2@gmail.com',
    password: '12345678',
    totalMeditations: 2,
    totalJournalEntries: 1,
    userLevel: 1
  },
  {
    name: 'Shion',
    email: 'testing3@gmail.com',
    password: '12345678',
    totalMeditations: 1,
    totalJournalEntries: 4,
    userLevel: 2
  }
]

const entries = [
  {
    date: new Date(2020, 3, 12),
    mood: 'good',
    entry:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    userId: 1
  },
  {
    date: new Date(2018, 1, 9),
    mood: 'bad',
    entry:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    userId: 3
  },
  {
    date: new Date(2018, 1, 9),
    mood: 'bad',
    entry:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    userId: 3
  },
  {
    date: new Date(2017, 2, 7),
    mood: 'bad',
    entry:
      'Metus dictum at tempor commodo ullamcorper a. Tortor vitae purus faucibus ornare suspendisse sed nisi. Sem et tortor consequat id porta nibh venenatis cras. Faucibus ornare suspendisse sed nisi lacus sed. Etiam erat velit scelerisque in dictum non consectetur a. Molestie a iaculis at erat pellentesque adipiscing.',
    userId: 3
  },
  {
    date: new Date(2017, 2, 9),
    mood: 'bad',
    entry:
      'Ac tincidunt vitae semper quis. Urna nec tincidunt praesent semper feugiat nibh. Aenean et tortor at risus viverra adipiscing at. Felis eget velit aliquet sagittis. Bibendum ut tristique et egestas quis ipsum.',
    userId: 3
  }
]

const levels = [
  {
    number: 1,
    meditations: 1,
    quizzes: 1
  },
  {
    number: 2,
    meditations: 3,
    quizzes: 1,
    entries: 3
  },
  {
    number: 3,
    meditations: 7,
    quizzes: 3,
    entries: 5
  },
  {
    number: 4,
    meditations: 12,
    quizzes: 7,
    entries: 8
  },
  {
    number: 5,
    meditations: 15,
    quizzes: 10,
    entries: 10
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(
    users.map(user => {
      return User.create(user)
    }),
    entries.map(entry => {
      return JournalEntries.create(entry)
    }),
    quizData.map(quiz => {
      return Quiz.create(quiz)
    }),

    levels.map(level => {
      return Levels.create(level)
    })
  )
  console.log(`seeded ${users.length} users`)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
