const { Router } = require('express');
const router = Router();

const data = [
    {id: 1, name: 'User 1'},
    {id: 2, name: 'User 2'},
    {id: 3, name: 'User 3'},
    {id: 4, name: 'User 4'},
    {id: 5, name: 'User 5'},
    {id: 6, name: 'User 6'},
    {id: 7, name: 'User 7'}
]

// Get all bookings, paginated
router.get('/bookings', (req, res) => {
    const pageIndex = Number(req.query.pageIndex) || 0;
    const pageSize = Number(req.query.pageSize) || 5;

    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;

    const result = {};

    //TO DO: add validation cheks
    
    result.totalCount = data.length;
    result.list = data.slice(startIndex, endIndex);

    res.json(result);
});

// Create a new bookings

// Delete a booking



module.exports = router;