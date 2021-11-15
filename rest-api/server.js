require('dotenv').config();
const express = require('express');
const routes = require('./routes');
require('./mongoose');

const PORT = process.env.PORT || 3500;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';

const app = express();
const cors = require('cors');

app.use(cors({
    origin: CORS_ORIGIN
}));
app.use(express.json());
app.use(routes);



app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));