//apis for creating and joining game

const router = require('express').Router();
const Game = require('../../models/Gamemodel');
var generator = require('generate-password');

//fetch for creating a game
router.get('/', async (req, res) => {
    //here should create a new table for the game with a unique game id
    //and should send that game id back
    let code = generator.generate({length: 4,numbers: true,lowercase:false});
    try{
    const newGame = await Game.create({"Game_id":code,"player1":null,"player2":null,"playing":"false","player1turn":"true"});
    res.status(200).json(newGame);
    // res.render('create')
    }catch (err) {
      res.status(500).json(err);
    }
});

// .catch(err) {
//   console.log(err)
// }


//fetch for pulling the game info, to check status and join game
router.get('/:gameId', async (req, res) => {
  try{
    const gameData = await Game.findByPk(req.params.gameId);
    if(gameData){
      
      res.status(200).json(gameData);
      return;
    }
    res.status(404).json("sorry no game has this id")
  }catch{
    res.status(500).json(err);
  }
});

// function to do a move
router.post('/action/:userAction', async (req, res) => {
  let userAction = req.params.userAction
  let info = req.body

  if(info.attack == "attack"){
    
  }
  if(info.attack == "super"){
    
  }
  if(info.attack == "heal"){
    
  }
});

module.exports = router;
