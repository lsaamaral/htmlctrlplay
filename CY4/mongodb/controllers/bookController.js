const Book = require('../models/book');

const createBook = async (req, res) => {
    try {
        const { title, author, year, genre } = req.body;
        const newBook = new Book({ title, author, year, genre });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (erro) {
        res.status(500).json({ error: "Erro ao criar livro" });
    }
};

module.exports = { createBook };