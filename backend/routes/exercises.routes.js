const router = require('express').Router();

const Exercise = require('../models/exercise.model');

router.get('/', async (req, res) => {
    const exercises = await Exercise.find();
    res.json(exercises);
});

router.get('/:id', async (req, res) => {
    const exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
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

    await exercise.save();
    res.json({status: 'Exercise Added'})
});

router.put('/:id', async (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;

    const exercise = {
        username, 
        description,
        duration, 
        date
    };

    await Exercise.findByIdAndUpdate(req.params.id, exercise)
    res.json({status: 'Exercise Updated'})
});

router.delete('/:id', async (req, res) => {
    await Exercise.findByIdAndRemove(req.params.id);
    res.json({status: 'Exercise Deleted'});
});

module.exports = router;