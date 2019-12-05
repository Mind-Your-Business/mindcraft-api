const isSelf = (req, res, next) => {
  if (Number(req.user.id) === Number(req.params.userId)) {
    next()
  } else {
    res.status(403).send('User not authorized.')
  }
}

module.exports = isSelf
