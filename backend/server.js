const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const { mongoose } = require('./database');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/users', require('./routes/users.routes'));
app.use('/exercises', require('./routes/exercises.routes'));

app.listen(port, () => {
    console.log(`Server listen in port ${port}`);
});
