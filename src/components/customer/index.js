const express = require('express');

const router = express.Router();

const customerController = require('./customerController');

router.get('/auth', customerController.hello);

module.exports = router;
