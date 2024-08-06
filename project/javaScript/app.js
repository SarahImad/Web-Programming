const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '../html/HomePage.html'));
});

app.use(express.static('public'));

const eventsRoute = require('./api/roots/events');
const usersRoute = require('./api/roots/users');

const corsOptions = {
    origin: 'http://127.0.0.1:5500', // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/events', eventsRoute);
app.use('/users', usersRoute);

//connect through connection string + specify desired db
mongoose.connect('mongodb://localhost:27017/Events')



module.exports = app;
