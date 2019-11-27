const router = require('express').Router()
const {User, Quizzes, Quiz} = require('../db/models')
module.exports = router

//get user by id:
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
    const quizzes = await Quiz.findByPk(req.params.id)
    console.log('quiz', quizzes)
    res.send(quizzes)
  } catch (error) {
    next(error)
  }
})

module.exports = router
