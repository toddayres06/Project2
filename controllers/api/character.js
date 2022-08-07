const router = require('express').Router();
const Game = require('../../models/Gamemodel');

router.post('/:player/:gameID', async (req, res) => {
  try{
    if(req.params.player == 1){
      await Game.update({player1:req.body},{where:{game_id:req.params.gameID}})

      // console.log("")
      res.status(200).json("1")
      return
    } else if (req.params.player == 2){

      await Game.update({player2:req.body,playing:true},{where:{game_id:req.params.gameID}})
      res.status(200).json("2")
      return
    }
    res.status(404).json("error when uploading character")
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;