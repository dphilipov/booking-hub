const paginatedResults = require('../middlewares/paginatedResults');
const Booking = require('../models/bookingModel');
const { Router } = require('express');
const router = Router();

// Get all bookings, paginated
router.get('/bookings', paginatedResults(Booking), (req, res) => {
    res.json(res.paginatedResult);
});

// Create a new bookings
router.post('/bookings/create', async (req, res) => {
    const booking = new Booking({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        departureAirportId: req.body.departureAirportId,
        arrivalAirportId: req.body.arrivalAirportId,
        departureDate: req.body.departureDate,
        returnDate: req.body.returnDate,
    })

    try {
        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }

});

// Delete a booking



module.exports = router;