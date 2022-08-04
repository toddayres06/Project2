const router = require('express').Router();

router.get('/', async (req, res) => {
  res.status(200).json("heres the updated status");
});

module.exports = router;