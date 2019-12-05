const router = require('express').Router()
const {Tests, TestQuestions, User} = require('../db/models')
const isSelf = require('./securityCheck')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allTests = await Tests.findAll({include: {model: TestQuestions}})

    res.json(allTests)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const thisTest = await Tests.findByPk(req.params.id, {
      include: [{model: User}, {model: TestQuestions}]
    })
    res.json(thisTest)
  } catch (error) {
    next(error)
  }
})

module.exports = router
