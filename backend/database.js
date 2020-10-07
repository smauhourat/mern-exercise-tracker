const mongoose = require('mongoose');

const URI = process.env.MONGO_DB_URI;

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(dbo => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;