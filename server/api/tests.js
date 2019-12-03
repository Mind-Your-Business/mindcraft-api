const router = require('express').Router()
const {Tests} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allTests = await Tests.findAll()
    res.json(allTests)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const oneTest = await Tests.findByPk(req.params.id)
    console.log('test', oneTest)
    res.json(oneTest)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    let thisTest = await Tests.findByPk(req.params.id)
    const updatedInfo = {
      correctAnswers: req.body.correctAnswers,
      completedCorrectly: req.body.completedCorrectly,
      incorrectAnswers: req.body.incorrectAnswers
    }
    await thisTest.update(updatedInfo)
    res.json({thisTest, message: 'Quiz updated succesfully'})
  } catch (error) {
    next(error)
  }
})

module.exports = router
