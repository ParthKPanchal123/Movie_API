const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    movie: {    
        type: String,
    },
    cast: {
        type: String,
    },
    director: {
        type: String,
    },
    rating: {
        type: Number,
    },
    year: {
        type: Number,
    },
    poster: {
        type: String
    }
});

module.exports = mongoose.model("Movie", movieSchema);
