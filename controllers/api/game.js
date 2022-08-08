// all of our requires
const router = require('express').Router();
const Game = require('../../models/Gamemodel');
var generator = require('generate-password');
const random = require('random')

//fetch for creating a game
router.get('/', async (req, res) => {
    //making a random game code for the game
    let code = generator.generate({length: 4,numbers: true,lowercase:false});
    try{

      //making a new row in the database
    const newGame = await Game.create({"game_id":code,"player1":null,"player2":null,"playing":"false","player1turn":"true"});
    //sending back a status 200 with the game info

    res.status(200).json(newGame);
    // res.render('create')
    }catch (err) {
      res.status(500).json(err);
    }
});

//fetch for pulling the game info, to check status and join game
router.get('/:gameId', async (req, res) => {
  try{
    //using the params to find the game
    const gameData = await Game.findByPk(req.params.gameId);
    //if it finds the game, send back a status 200 with the game data
    if(gameData){
      res.status(200).json(gameData);
      return;
    }
    //else send a 404
    res.status(404).json("sorry no game has this id")
  }catch{
    res.status(500).json(err);
  }
});

// function to do a move
router.post('/action', async (req, res) => {
  let info = req.body
  //player:1
  // gameId:1234
  // action:attack

  const gameData = await Game.findByPk(info.gameID);
  let player = gameData.player1
  if(info.player == 2){player = gameData.player2}
  if(info.action == "attack"){
    let opp;
    
    let attack = random.int((min = parseInt(player.strength)-3), (max =  parseInt(player.strength)+3))
    
    if(info.player == 1){
      opp = gameData.player2
      opp.health -= attack
      Game.update({player2:opp},{where:{game_id:info.gameID}})
    }
    if(info.player == 2){
      opp = gameData.player1
      opp.health -= attack
      Game.update({player1:opp},{where:{game_id:info.gameID}})
    }
    res.status(200).json(opp);
  }
  if(info.action == "heal"){
    let player;
    let healAb = parseInt(info.healing)
    let heal = random.int((min = healAb -1), (max =  healAb + 1))
    if(info.player == 1){
      player = gameData.player1
      player.health += heal
      Game.update({player1:player},{where:{game_id:info.gameId}})
    }
    if(info.player == 2){
      player = gameData.player2
      player.health += heal
      Game.update({player2:player},{where:{game_id:info.gameId}})
    }
    res.status(200).json(player);
  }
});

module.exports = router;
