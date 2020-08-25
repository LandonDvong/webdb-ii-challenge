const express = require('express');
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then((carData) => {
            res.status(200).json(carData);
        })
        .catch(() => {
            res.status(500).json({message: "There was an error retrieving the cars."});
        })
});

router.post('/', (req, res) => {
    const carData = req.body;

    db('cars').insert(carData)
        .then(car => {
                    res.status(201).json(car)
        })
        .catch(() => {
            res.status(500).json({message: "There was an error creating the car entry."})
        })
});

module.exports = router; 