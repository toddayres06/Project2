const router = require('express').Router();

const gameApis = require('./game.js')
const statusApis = require('./status.js')

router.use('/game', gameApis);
router.use('/status', statusApis);

module.exports = router;