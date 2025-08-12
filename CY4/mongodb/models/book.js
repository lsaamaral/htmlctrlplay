const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: { type: String, required: [true, "O título é obrigatório"], minlength: [3, "O livro precisa conter pelo menos 3 caracteres"]},
    author: { type: String, required: [true, "O autor é obrigatório"], minlength: [3, "O nome do autor precisa conter pelo menos 3 caracteres"]},
    year: { type: Number, required: [true, "O ano de publicação é obrigatório"], min: [1000, "Ano inválido"], max: [new Date().getFullYear(), "O ano de publicação não pode ser no futuro"]},
    genre: { type: String, required: [true, "O gênero é obrigatório"]},
    createdAt: { type: Date, default: Date.now }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;