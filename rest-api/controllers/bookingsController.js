const paginatedResults = require('../middlewares/paginatedResults');
const getOne = require('../middlewares/getOne');
const deleteOne = require('../middlewares/deleteOne');
const Booking = require('../models/bookingModel');
const { Router } = require('express');
const router = Router();

// Get all bookings, paginated
router.get('/', paginatedResults(Booking), (req, res) => {
    res.json(res.paginatedResult);
});

// Get one bookings by ID
router.get('/:id', getOne, (req, res) => {
    res.json(res.booking);
});

// Create a new bookings
router.post('/create', async (req, res) => {
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
router.delete('/:id', getOne, deleteOne, (req, res) => {
    res.json({
        message: 'Booking deleted'
    })
});


module.exports = router;