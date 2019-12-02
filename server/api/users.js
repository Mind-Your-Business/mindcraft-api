const router = require('express').Router()
const {User, JournalEntries, Levels} = require('../db/models')

const isSelf = (req, res, next) => {
  if (Number(req.user.id) === Number(req.params.userId)) {
    next()
  } else {
    res.status(403).send('User not authorized.')
  }
}

module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    res.send(user)
  } catch (error) {
    next(error)
  }
})

//get all users:
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: [
        'id',
        'email',
        'totalMeditations',
        'totalJournalEntries',
        'totalQuizzes',
        'userLevel'
      ]
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//update user's information, update level, number of accomplishments etc.
router.put('/:userId', async (req, res, next) => {
  try {
    console.log(req.params.userId)
    const user = await User.update(req.body, {
      where: {
        id: req.params.userId
      },
      returning: true
    })
    res.json(user)
  } catch (error) {
    next(error)
  }
})

//create new user:
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.send(newUser)
  } catch (error) {
    next(error)
  }
})
