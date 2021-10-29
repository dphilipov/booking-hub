const express = require('express');
const routes = require('./routes');
require('./mongoose');

const PORT = 3500;

const app = express();

app.use(express.json());
app.use(routes);



app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));