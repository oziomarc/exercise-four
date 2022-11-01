const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', (req, res) => {
  res.send('ABOUT PAGE')
})

router.get('/me', (req, res) => {
    res.send('About ME')
})

module.exports = router