const express = require('express');

const router = express.Router();

const loggerCtrl = require('../controllers/logger');

router.get('/', loggerCtrl.index);
router.get('/new', loggerCtrl.new);
router.post('/', loggerCtrl.create);
router.delete('/:id', loggerCtrl.delete);
router.get('/:id/edit', loggerCtrl.edit);
router.put('/:id', loggerCtrl.update);

module.exports = router;