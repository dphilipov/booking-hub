const express = require('express');
const routes = require('./routes');
require('./mongoose');

const PORT = 3500;

const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(routes);



app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));