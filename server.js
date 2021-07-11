// Setting dependencies
const express = require('express');
const path = require('path');

// Configuring express
const app = express();
const PORT = process.env.PORT || 3000;

// Setting up to handle parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Starting server
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});