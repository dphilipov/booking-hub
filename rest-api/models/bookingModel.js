const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    departureAirportId: {
        type: Number,
        required: true
    },
    arrivalAirportId: {
        type: Number,
        required: true
    },
    departureDate: {
        type: String,
        required: true
    },
    returnDate: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Booking', bookingSchema);