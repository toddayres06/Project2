//apis for creating and joining game

const Game = require('../../models/Gamemodel');

const router = require('express').Router();

//fetch for creating a game
router.get('/', async (req, res) => {
    //here should create a new table for the game with a unique game id
    //and should send that game id back
    res.render('create')
});





module.exports = router;