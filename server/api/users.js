const router = require('express').Router()

const {User, JournalEntries, Levels} = require('../db/models')
module.exports = router

//get user by id:
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
      attributes: ['id', 'email', 'totalMeditations', 'totalJournalEntries', 'totalQuizzes', 'userLevel']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/:activity', async (req, res, next) => {
  try {
    let activity = req.params.activity
    const user = await User.update({activity: req.body}, {returning: true, where: {id: req.params.id}})
    res.json(user)
  } catch (error) {
    next(error)
  }
})
//update user's information, update level, number of accomplishments etc.
router.put('/:userId/:activity', async (req, res, next) => {
  try {
    let activity = req.params.activity
    const user = await User.update({activity: req.body}, {returning: true, where: {id: req.params.id}})
    res.json(user[0])
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

