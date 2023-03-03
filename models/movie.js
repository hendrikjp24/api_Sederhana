const mongoose = require("mongoose");

const Movies = new mongoose.model("Movie", {
    title: String,
    genre: String,
    Produser: String,
});

module.exports = Movies;