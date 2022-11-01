const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => { //second argument is callback function containing 2 args: reqest and response
    res.send("Hello World!")
}) 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})