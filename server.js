'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const handlerFunctions = require('./routes.js');
//globals
const PORT = process.env.PORT;
const app = express();


//midware
app.use(cors());


//routes
app.get('/', handlerFunctions.handleGetHome);

app.get('/about', handlerFunctions.handleGetAbout);

app.get(('/movies'), handlerFunctions.handleGetMovies


//handler functions


//listener
app.listen(PORT, () => console.log('Listening on PORT' + PORT));