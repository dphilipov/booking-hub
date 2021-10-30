const { Router } = require('express');
const router = Router();

const bookingsController = require('./controllers/bookingsController');


router.use('/bookings', bookingsController);


module.exports = router;