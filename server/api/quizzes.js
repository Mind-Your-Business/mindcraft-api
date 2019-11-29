const router = require('express').Router()
const {Quizzes, Quiz} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const quiz = await Quizzes.findAll({
      attributes: ['name', 'id', 'questions']
    })
    res.send(quiz)
  } catch (error) {
    next(error)
  }
})

router.get('/quiz/:id', async (req, res, next) => {
  try {
    const quizzes = await Quiz.findByPk(req.params.id)
    console.log('quiz', quizzes)
    res.send(quizzes)
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
    thisQuiz = await thisQuiz.update(updatedInfo)
    res.send(thisQuiz)
  } catch (error) {
    next(error)
  }
})

module.exports = router
