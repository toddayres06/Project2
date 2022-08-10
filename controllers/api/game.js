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
    } catch (err) {
      res.status(500).json(err);
    }
});

//fetch for pulling the game info, to check status and join game
router.get('/:gameId', async (req, res) => {
  try{
    //using the params to find the game
    const gameData = await Game.findByPk(req.params.gameId);
    if(gameData.player1.health < 1){
      let gameOver = {winner:2}
      res.status(200).json(gameOver);
      setTimeout(() => {
        Game.destroy({
          where: {
            game_id: req.params.gameId,
          }
        })
      }, "3000")
      return;
    }
    if(gameData.player2){
      if(gameData.player2.health < 1){
        let gameOver = {winner:1}
        res.status(200).json(gameOver);
        setTimeout(() => {
          Game.destroy({
            where: {
              game_id: req.params.gameId,
            }
          })
        }, "3000")
        return
      }
    }
    if(gameData){
      res.status(200).json(gameData);
      return;
    }
    else{
      res.status(404).json("sorry no game has this id")
      return
    }

  }catch(err){
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
  if(info.action == "attack" || info.action == "heavy"){
    let message = 'attack';
    let opp;
    let attack = random.int((min = parseInt(player.strength)-2), (max =  parseInt(player.strength)+2))
    if(info.action == "heavy"){
      let chance = (7 + player.dexterity)
      message = 'heavy attack'
      attack += 4;
      let miss = random.int((min = 1), (max =  20))
      let test = {miss:miss,chance:chance}
      if(miss > chance){
        res.status(200).json(test);
        if(info.player == 1){
          Game.update({player1turn:false},{where:{game_id:info.gameID}})
        }
        if(info.player == 2){
          Game.update({player1turn:true},{where:{game_id:info.gameID}})
        }
        return
      }
    }
    if(info.player == 1){
      opp = gameData.player2
      opp.health -= attack
      Game.update({player2:opp,player1turn:false},{where:{game_id:info.gameID}})
    }
    if(info.player == 2){
      opp = gameData.player1
      opp.health -= attack
      Game.update({player1:opp,player1turn:true},{where:{game_id:info.gameID}})
    }
    res.status(200).json(message)
    return;
  }
  if(info.action == "heal"){  
    let healAb = parseInt(player.medical)
    let heal = random.int((min = healAb -1), (max =  healAb + 1))
    player.health += heal;
    if(player.health > player.maxHealth){
      player.health = player.maxHealth
    }
    if(info.player == 1){
      Game.update({player1:player,player1turn:false},{where:{game_id:info.gameID}})
    }
    if(info.player == 2){
      Game.update({player2:player,player1turn:true},{where:{game_id:info.gameID}})
    }
    res.status(200).json('heal');
  }
});

module.exports = router;
