const router = require('express').Router();

// HOME PAGE
router.get('/', (req, res) => {
  res.render('homepage');
})

// CREATE CHARACTER 1
router.get('/create/1', (req, res) => {
  res.render('create');
})

// CREATE CHARACTER 2
router.get('/create/2', (req, res) => {
  res.render('create');
})

// WAITING ROOM AFTER CHARACTER 1
router.get('/waiting', (req, res) => {
  res.render('waitingroom');
})

module.exports = router;