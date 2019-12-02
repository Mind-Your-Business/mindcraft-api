const router = require('express').Router()
const {Quizzes, Quiz} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const quiz = await Quizzes.findAll({
      attributes: ['name', 'id', 'questions']
    })
    res.json(quiz)
  } catch (error) {
    next(error)
  }
})

router.get('/quiz/:id', async (req, res, next) => {
  try {
    const oneQuiz = await Quiz.findByPk(req.params.id)
    console.log('quiz', oneQuiz)
    res.json(oneQuiz)
  } catch (error) {
    next(error)
  }
})


router.put('/quiz/:id', async (req, res, next) => {
  try {
    let thisQuiz = await Quiz.findByPk(req.params.id)
    const updatedInfo = {
      correctAnswers: req.body.correctAnswers,
      completedCorrectly: req.body.completedCorrectly,
      incorrectAnswers: req.body.incorrectAnswers
    }
    await thisQuiz.update(updatedInfo)
    res.json({thisQuiz, message: 'Quiz updated succesfully'})
  } catch (error) {
    next(error)
  }
})

module.exports = router
