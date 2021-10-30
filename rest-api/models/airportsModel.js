const mongoose = require('mongoose');

const airportSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        maxlength: 4,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Airport', airportSchema);
