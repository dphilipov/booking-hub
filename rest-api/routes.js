const { Router } = require('express');
const router = Router();

const bookingsController = require('./controllers/bookingsController');
const airportsController = require('./controllers/airportsController');


router.use('/bookings', bookingsController);
router.use('/airports', airportsController);


module.exports = router;