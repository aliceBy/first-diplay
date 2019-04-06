const express = require('express')
const router = express.Router()

const notice = require('./notice')

router.use('/notice', notice) // /notice/index.js

module.exports = router