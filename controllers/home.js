const router = require('express').Router();

// HOME PAGE
router.get('/', (req, res) => {
  res.render('homepage');
})

// CREATE CHARACTER
router.get('/create', (req, res) => {
  res.render('create');
})

module.exports = router;