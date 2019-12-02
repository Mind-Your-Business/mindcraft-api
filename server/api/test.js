const router = require('express').Router()
const {Test} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const tests = await Test.findAll({
      attributes: ['name', 'id', 'questions']
    })
    res.json(tests)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const oneTest = await Test.findByPk(req.params.id)
    console.log('test', oneTest)
    res.json(oneTest)
  } catch (error) {
    next(error)
  }
})

router.post('/:id', async (req, res, next) => {
  try {
    let thisTest = await Test.findByPk(req.params.id)
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
