const router = require('express').Router();

const gameApis = require('./game.js')
const characterApi = require('./character.js')

router.use('/game', gameApis);
router.use('/character',characterApi)

module.exports = router;