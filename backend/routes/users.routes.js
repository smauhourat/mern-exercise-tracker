const router = require('express').Router();

const User = require('../models/user.model');

router.get('/', async (req, res) => {
    const users = await User.find().catch((err) => res.status(400).json('Error: ' + err));
    res.json(users);
});

router.post('/', async (req, res) => {
    const username = ""; //req.body.username;
    const user = new User({username});

    await user.save((err, user) => {
        if (err) {
            res.status(400).json({status: 'Error', description: err });
        }
        else {
            res.json({status: 'User Added'});
        }
    });
});

module.exports = router;