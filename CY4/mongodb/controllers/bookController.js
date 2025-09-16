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

const getBooks = async (req, res) => {
    try {
        let query = {};
        if (req.query.title) {
            query.title = { $regex: req.query.title, $options: "i"};
        }
        if (req.query.author) {
            query.author = req.query.author;
        }

        let sort = {};
        if (req.query.sortBy){
            const sortField = req.query.sortBy;
            const sortOrder = req.query.order === 'desc' ? -1 : 1;
            sort[sortField] = sortOrder;
        }

        const pageNumber = parseInt(req.query.pageNumber) || 1;
        const pageSize = parseInt(req.query.pageSize) || 5;
        const skip = (pageNumber - 1) * pageSize;
        
        const books = await Book.find(query).sort(sort).skip(skip).limit(pageSize);
        // if (!book) {
        //     return res.status(404).json({error: "Livro não encontrado"});
        // }

        res.json(books);
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

module.exports = { createBook, getBooks, updateBook, deleteBook };