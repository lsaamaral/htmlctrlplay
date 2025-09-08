const Book = require('../models/book');

const createBook = async (req, res) => {
    try {
        const { title, author, year, genre } = req.body;
        const newBook = new Book({ title, author, year, genre });
        await newBook.save();
        res.status(201).json({message: "Livro adicionado com sucesso"});
    } catch (erro) {
        res.status(500).json({ error: "Erro ao criar livro" });
    }
};

const getBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({error: "Livro não encontrado"});
        }

        res.json(book);
    } catch (error){
        res.status(500).json({error: "Erro ao buscar livros"});
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const options = { new: true, runValidators: true};

        const updatedBook = await Book.findByIdAndUpdate(id, updates, options);
        if (!updatedBook){
            return res.status(404).json({error: "Livro não encontrado"});
        }
        res.status(201).json({message: "Livro atualizado com sucesso"});
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar o livro"});
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({error: "Livro não encontrado"});
        }

        res.status(201).json({message: "Livro excluido com sucesso"});
    } catch (error) {
        res.status(500).json({error: "Erro ao tentar excluir o livro"});
    }
};

module.exports = { createBook, getBook, updateBook, deleteBook };