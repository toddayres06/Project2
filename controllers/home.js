const router = require('express').Router();

// HOME PAGE
router.get('/', (req, res) => {
  res.render('homepage');
})

// CREATE CHARACTER 
router.get('/create', (req, res) => {
  res.render('create');
})

// WAITING ROOM
router.get('/waiting', (req, res) => {
  res.render('waitingroom');
})

router.get('/game', (req, res) => {
  res.render('game');
})

module.exports = router;