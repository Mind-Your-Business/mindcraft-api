'use strict'

const db = require('../server/db')
const {
  User,
  JournalEntries,
  Levels,
  Tests,
  TestQuestions
} = require('../server/db/models')
const {testData, testQuestions} = require('./testDummyData')

const users = [
  {
    name: 'Zell',
    email: 'testing1@gmail.com',
    password: '12345678',
    totalMeditations: 7,
    totalJournalEntries: 3,
    userLevel: 3,
    totalQuizzes: 1,
    completedQuizzes: [1, 2, 3, 4, 6]
  },
  {
    name: 'Vincy',
    email: 'testing2@gmail.com',
    password: '12345678',
    totalMeditations: 2,
    totalJournalEntries: 1,
    totalQuizzes: 2,
    userLevel: 1
  },
  {
    name: 'Shion',
    email: 'testing3@gmail.com',
    password: '12345678',
    totalMeditations: 1,
    totalJournalEntries: 4,
    totalQuizzes: 4,
    userLevel: 2
  }
]

const entries = [
  {
    date: new Date(2019, 2, 12),
    mood: 'Good',
    entry:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    userId: 1
  },
  {
    date: new Date(2018, 1, 9),
    mood: 'Bad',
    entry:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    userId: 3
  },
  {
    date: new Date(2018, 1, 9),
    mood: 'Bad',
    entry:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    userId: 3
  },
  {
    date: new Date(2017, 2, 7),
    mood: 'Bad',
    entry:
      'Metus dictum at tempor commodo ullamcorper a. Tortor vitae purus faucibus ornare suspendisse sed nisi. Sem et tortor consequat id porta nibh venenatis cras. Faucibus ornare suspendisse sed nisi lacus sed. Etiam erat velit scelerisque in dictum non consectetur a. Molestie a iaculis at erat pellentesque adipiscing.',
    userId: 3
  },
  {
    date: new Date(2017, 2, 9),
    mood: 'Bad',
    entry:
      'Ac tincidunt vitae semper quis. Urna nec tincidunt praesent semper feugiat nibh. Aenean et tortor at risus viverra adipiscing at. Felis eget velit aliquet sagittis. Bibendum ut tristique et egestas quis ipsum.',
    userId: 3
  },
  {
    date: new Date(2019, 3, 10),
    mood: 'Great',
    hoursSlept: 9,
    favorite: 'Waking up without an alarm',
    least: 'Not a one',
    entry: `Today was great. I'm officially in Rome and in vacation mode. It feels good to be out of work mode after spending the last few weeks grinding out all those projects at work and to get up without having to hear the sound of an alarm. I can't wait to see what the day holds and where I end up today.`,
    userId: 1
  },
  {
    date: new Date(2019, 3, 1),
    mood: 'Okay',
    hoursSlept: 5,
    favorite: 'Hmmm....',
    least: 'Just one?',
    entry: `Today was a roller coaster I would have rather not been on. These projects at work feel never ending and it feels like the quest for progress is not going in the right direction. I know that it's all temporary but damn,what the he..?Grr...is it time to go on vacation yet?`,
    userId: 1
  },

  {
    date: new Date(2018, 11, 24),
    mood: 'Good',
    hoursSlept: 7,
    favorite: 'Shopping',
    least: 'Wrapping all these presents',
    entry: `Today has been...productive. Waiting to shop for everyone's presents has definitely not been my brightest idea ever but I guess I do love a good challenge? Shopping was actually pretty pleasant since I made it out early enough to avoid the crowds and was (fortunately) able to find something for everyone. I definitely wish I had an extra set of hands to wrap some of the presents but it'll be worthwhile to see them under the tree and watch everyone have something to open tomorrow morning. All right, I've babbled enough. Time to wrap.`,
    userId: 1
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
    testData.map(test => {
      return Tests.create(test)
    }),
    testQuestions.map(question => {
      return TestQuestions.create(question)
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
