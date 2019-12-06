const router = require('express').Router()
const {Levels} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const levels = await Levels.findAll()
    res.json(levels)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const oneLevel = await Levels.findByPk(req.params.id)
    res.json(oneLevel)
  } catch (error) {
    next(error)
  }
})

module.exports = router
