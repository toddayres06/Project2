//apis for creating and joining game

const router = require('express').Router();

//fetch for creating a game
router.post('/', async (req, res) => {
    //here should create a new table for the game with a unique game id
    //and should send that game id back
});


//fetch for joining a game
router.get('/:gameId', async (req, res) => {
  //here should check all of the avalible tables for the game id
  //if it finds it tell the front end it is found
  //else tell the front end there was an error

});

module.exports = router;