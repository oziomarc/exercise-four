const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', (req, res) => {
  res.send('HOME PAGE')
})

module.exports = router