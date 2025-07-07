const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: { type: String},
    author: { type: String},
    year: { type: Number},
    genre: { type: String},
    createdAt: { type: Date, default: Date.now }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;