const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', (req, res) => {
  res.send('<h1>ABOUT PAGE</h1> <a href=/about/me <h2>ME</h2>')
})

router.get('/me', (req, res) => {
    res.send('About ME')
})

module.exports = router