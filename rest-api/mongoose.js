require('dotenv').config();
const mongoose = require('mongoose');

const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://localhost/booking-hub';
mongoose.connect(DATABASE_URI, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Database connected!`);
});

module.exports = db;