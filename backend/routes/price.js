const express = require('express')
const {tokenPrice} = require('../controllers/priceapi')

const router = express.Router()

router.route('/').get(tokenPrice)


module.exports = router;
