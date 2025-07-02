const express = require('express');
const { ObjectId } = require('mongodb');
const { getDB } = require('../db');

const router = express.Router();

// GET /movies
router.get('/', async (req, res) => {
    const db = getDB();
    const movies = await db.collection('movies').find().toArray();
    res.json(movies);
});

// GET /movies/:id
router.get('/:id', async (req, res) => {
    const db = getDB();
    try {
        const movie = await db.collection('movies').findOne({ _id: new ObjectId(req.params.id) });
        if (!movie) return res.status(404).send('Movie not found');
        res.json(movie);
    } catch {
        res.status(400).send('Invalid ID');
    }
});

// POST /movies
router.post('/', async (req, res) => {
    const db = getDB();
    const { title, director, year } = req.body;
    const result = await db.collection('movies').insertOne({ title, director, year });
    res.status(201).json(result.ops ? result.ops[0] : { _id: result.insertedId, title, director, year });
});

// PUT /movies/:id
router.put('/:id', async (req, res) => {
    const db = getDB();
    const { title, director, year } = req.body;
    try {
        const result = await db.collection('movies').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: { title, director, year } }
        );
        if (result.matchedCount === 0) return res.status(404).send('Movie not found');
        res.send('Movie updated');
    } catch {
        res.status(400).send('Invalid ID');
    }
});

// DELETE /movies/:id
router.delete('/:id', async (req, res) => {
    const db = getDB();
    try {
        const result = await db.collection('movies').deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) return res.status(404).send('Movie not found');
        res.send('Movie deleted');
    } catch {const express = require('express');
const { ObjectId } = require('mongodb');
const { getDB } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
    const movies = await getDB().collection('movies').find().toArray();
    res.json(movies);
});

router.get('/:id', async (req, res) => {
    try {
        const movie = await getDB().collection('movies').findOne({ _id: new ObjectId(req.params.id) });
        if (!movie) return res.status(404).send('Movie not found');
        res.json(movie);
    } catch {
        res.status(400).send('Invalid ID format');
    }
});

router.post('/', async (req, res) => {
    const { title, director, year } = req.body;
    const result = await getDB().collection('movies').insertOne({ title, director, year });
    res.status(201).json({ _id: result.insertedId, title, director, year });
});

router.put('/:id', async (req, res) => {
    const { title, director, year } = req.body;
    try {
        const result = await getDB().collection('movies').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: { title, director, year } }
        );
        if (result.matchedCount === 0) return res.status(404).send('Movie not found');
        res.send('Movie updated');
    } catch {
        res.status(400).send('Invalid ID format');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await getDB().collection('movies').deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) return res.status(404).send('Movie not found');
        res.send('Movie deleted');
    } catch {
        res.status(400).send('Invalid ID format');
    }
});

module.exports = router;

        res.status(400).send('Invalid ID');
    }
});

module.exports = router;
