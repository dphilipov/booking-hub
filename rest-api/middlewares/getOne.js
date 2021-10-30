const Booking = require('../models/bookingModel');

module.exports = async function getOne(req, res, next) {
    let booking;

    try {
        booking = await Booking.findById(req.params.id);
        if (booking == null) {
            return res.status(404).json({
                message: 'Cannot find booking'
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }

    res.booking = booking;
    next();
}