const express = require('express')

const config = require('../config.js')
const user = require('./components/user/network')
const app = express()

//Router
app.use('/api/user', user)


app.listen(config.api.port, () => {
    console.log(`listen in port 3000`)
})