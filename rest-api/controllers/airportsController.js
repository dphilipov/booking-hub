const Airport = require('../models/airportsModel');
const { Router } = require('express');
const router = Router();

// Get all airports
router.get('/', async (req, res) => {
    const airports = await Airport.find().select('-_id').exec();

    res.json(airports);
});


module.exports = router;