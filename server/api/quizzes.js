const router = require('express').Router()
const {User, Quizzes, Quiz} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const quizzes = await Quizzes.findAll({
      include: {
        model: Quiz
      }
    })
    res.send(quizzes)
  } catch (error) {
    next(error)
  }
})

router.get('/quiz/:id', async (req, res, next) => {
  try {
    const oneQuiz = await Quiz.findByPk(req.params.id)
    console.log('quiz', oneQuiz)
    res.send(oneQuiz)
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
