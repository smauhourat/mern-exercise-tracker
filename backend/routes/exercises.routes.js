const router = require('express').Router();

const Exercise = require('../models/exercise.model');

router.get('/', async (req, res) => {
    const exercises = await Exercise.find((err, doc) => {
        if (err)
            res.status(400).json('Error: ' + err);
        else
            res.json(doc);
    });
});

router.post('/', async (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;

    const exercise = new Exercise({
        username, 
        description,
        duration, 
        date
    });

    await exercise.save((err, user) => {
        if (err) {
            console.log(err);
            res.status(400).json('Error: ' + err);
        }
        else {
            res.json({status: 'Exercise Added'});
        }
    });
});

router.delete('/:id', async (req, res) => {
    await Exercise.findByIdAndRemove(req.params.id);
    res.json({status: 'Exercise Deleted'});
});

module.exports = router;