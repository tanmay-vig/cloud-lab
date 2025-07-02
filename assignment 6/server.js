const express = require('express');
require('dotenv').config();
const { connectDB } = require('./db');
const moviesRoutes = require('./routes/movies');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/movies', moviesRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
