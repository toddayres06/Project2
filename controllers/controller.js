//the index.js of controllers
const router = require('express').Router();

const apiRoutes = require('./api/api.js')
const homeRoutes = require('./home.js')

router.use('/', homeRoutes)
router.use('/api',apiRoutes)

module.exports = router;