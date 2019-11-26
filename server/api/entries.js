const router = require('express').Router()
const {JournalEntries} = require('../db/models')
module.exports = router
const Sequelize = require('sequelize')

//gets all entries bu user's id:
router.get('/:userId', async (req, res, next) => {
  try {
    const entriesOfUser = await JournalEntries.findAll({
      where: {userId: req.params.userId}
    })
    res.json(entriesOfUser)
  } catch (err) {
    next(err)
  }
})

router.get('/today/:/userId', async (req, res, next) => {
  try {
    const today = await JournalEntries.find({where: Sequelize.where(Sequelize.fn('dateCompute'), '>', Sequelize.fn('GETDATE'))})
    console.log("TODAY", today)
  } catch (error) {
    next(error)  }
})

//find one entry by id:
router.get('/entry/:Id', async (req, res, next) => {
  try {
    const entry = await JournalEntries.findByPk(req.params.Id)
    res.json(entry)
  } catch (err) {
    next(err)
  }
})

//creates new journal entry for user, mood and entry should be on body of the request:

router.post('/:userId', async (req, res) => {
  try {
    const newEntry = await JournalEntries.create(req.body, {
      where: {userId: req.params.userId}
    })
    res.redirect('/entries' + newEntry.slug)
  } catch (err) {
    console.log(err)
  }
})
