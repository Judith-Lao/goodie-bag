const {Candy} = require('../db') //giving it a folder name will make it auto look for index
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    let allCandies = await Candy.findAll();
    res.send(allCandies)
  } catch (error) {
    next(error)
  }
})

module.exports = router
