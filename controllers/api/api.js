const router = require('express').Router();

const gameApis = require('./game.js')

router.use('/game', gameApis);

module.exports = router;