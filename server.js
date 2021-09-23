'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT;



const app = express();

app.use(cors());

app.listen(PORT, () => console.log('Listening on PORT' + PORT));