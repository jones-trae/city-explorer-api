'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { handleGetAbout, handleGetHome} = require('./routes.js');

//globals
const PORT = process.env.PORT;
const app = express();


//midware
app.use(cors());


//routes
app.get('/', handleGetHome);

app.get('/about', handleGetAbout);


//handler functions


//listener
app.listen(PORT, () => console.log('Listening on PORT' + PORT));