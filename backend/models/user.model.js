const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//otrocampo: {type: String, required: true},
const userSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlenght: 3 
    },
    }, {
        timestamps: true,
   });

   const User = mongoose.model('User', userSchema);

   module.exports = User;
