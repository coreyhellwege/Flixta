const mongoose = require('mongoose');

// Creating a schema for movie:
const movieSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    releaseYear: String,
    director: String,
    genre: String
});

// Exporting the above schema to our Movie model:
module.exports = mongoose.model('Movie', movieSchema)