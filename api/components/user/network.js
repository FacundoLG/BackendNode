const express = require('express')

const responce = require('../../../network/response')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(responce.succes(req, res, 'todobem', 200))

})

module.exports = router