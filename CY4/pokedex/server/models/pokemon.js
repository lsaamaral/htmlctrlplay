const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    type: {
        type: Array,
    },
    level: {
        type: Number,
        default: 1,
    },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);