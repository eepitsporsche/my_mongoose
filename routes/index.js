//Import Express Router and Routes
const router = require('express').Router();
const apiRoutes = require('./api');


//Middleware for Routes
router.use('/api', apiRoutes);
router.use((req, res) => {
    return res.status(404).send('Not Found');
});

module.exports = router;