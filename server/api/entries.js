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

//determine time of last entry

router.get('/:userId/time', async (req, res, next) => {
  try {
    let today = JSON.stringify(new Date()).split('T')[0]
    const entry = await JournalEntries.findOne({
      where: {userId: req.params.userId},
      order: [['createdAt', 'DESC']]
    })
    res.json(entry)
    // if (entry.split('T')[0] < today) {
    //   res.send(false)
    // } else {
    //   res.send(true)
    // }
  } catch (error) {
    next(error)
  }
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
