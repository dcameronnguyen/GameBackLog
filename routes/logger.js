const express = require('express');

const router = express.Router();

const loggerCtrl = require('../controllers/logger');

router.get('/', loggerCtrl.index);
router.get('/new', loggerCtrl.new);

module.exports = router;