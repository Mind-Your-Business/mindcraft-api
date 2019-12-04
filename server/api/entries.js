const router = require('express').Router()
const {JournalEntries, User} = require('../db/models')
module.exports = router

//find one entry by id:
router.get('/:id', async (req, res, next) => {
  try {
    const entry = await JournalEntries.findByPk(req.params.id)
    res.json(entry)
  } catch (err) {
    next(err)
  }
})

//gets all entries by user's id:
router.get('/user/:userId', async (req, res, next) => {
  try {
    const entriesOfUser = await JournalEntries.findAll({
      where: {userId: req.params.userId}
    })
    res.json(entriesOfUser)
  } catch (err) {
    next(err)
  }
})

// access user entry by id

router.get('/user/:userId/:entryId', async (req, res, next) => {
  try {
    const entriesOfUser = await JournalEntries.findAll(
      {
        where: [{userId: req.params.userId}, {id: req.params.entryId}]
      },
      {include: {model: User}}
    )
    res.json(entriesOfUser)
  } catch (err) {
    next(err)
  }
})

//determine last entry

router.get('/time/:userId', async (req, res, next) => {
  try {
    const entry = await JournalEntries.findOne({
      where: {userId: req.params.userId},
      order: [['date', 'DESC']]
    })
    res.json(entry)
  } catch (error) {
    next(error)
  }
})

//creates new journal entry for user, mood and entry should be on body of the request:

router.post('/:userId', async (req, res, next) => {
  try {
    const newEntry = await JournalEntries.create(req.body, {
      where: {userId: req.params.userId}
    })
    res.redirect('/entries' + newEntry.slug)
  } catch (err) {
    next(err)
  }
})
//deletes a user's entry

router.delete('/user/:userId/:entryId', async (req, res, next) => {
  try {
    const entry = await JournalEntries.findByPk(req.params.entryId)
    await entry.destroy()
    res.send('Entry successfully deleted.')
  } catch (error) {
    next(error)
  }
})
