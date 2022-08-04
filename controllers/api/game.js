//apis for creating and joining game

const router = require('express').Router();
const Game = require('../../models/Gamemodel');

//fetch for creating a game
router.post('/', async (req, res) => {
    //here should create a new table for the game with a unique game id
    //and should send that game id back
    try{
    const newGame = await Game.create(req.body);
    // res.status(200).json(newGame);
    }catch (err) {
      res.status(400).json(err);
    }
});


//fetch for joining a game
router.get('/:gameId', async (req, res) => {
  //here should check all of the avalible tables for the game id
  //if it finds it tell the front end it is found
  //else tell the front end there was an error

});

module.exports = router;