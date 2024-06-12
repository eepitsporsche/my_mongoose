//Import Express Router and Routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');


//Middleware for Routes
router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router;