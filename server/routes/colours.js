const express = require('express')
const router = express.Router()

const db = require('../db/colours')

router.get('/', (req,res) => {
    res.json(db.getColours())
})

module.exports = router