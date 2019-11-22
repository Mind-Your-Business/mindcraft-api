const router = require('express').Router()
const {User, JournalEntries, Levels} = require('../db/models')
module.exports = router

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
