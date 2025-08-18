const express = require("express");
const connectDB = require("./config/config");

const User = require("./models/user");
const Book = require("./models/book");


const bookRoutes = require('./routes/bookRoutes');

const app = express();
connectDB();
app.use(express.json());
app.use('/api', bookRoutes);

// app.get("/api/books", async (req, res) => {
//     try {
//         const books = await Book.find();
//         res.json(books);
//     } catch (error){
//         res.status(500).json({error: "Erro ao buscar livros"});
//     }
// });

app.get("/api/books/:id", async (req, res) => {
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
});

app.patch("/api/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const options = { new: true, runValidators: true};

        const updatedBook = await Book.findByIdAndUpdate(id, updates, options);
        if (!updatedBook){
            return res.status(404).json({error: "Livro não encontrado"});
        }
        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar o livro"});
    }
});

app.delete("/api/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({error: "Livro não encontrado"});
        }

        res.json({message: "Livro excluido com sucesso"});
    } catch (error) {
        res.status(500).json({error: "Erro ao tentar excluir o livro"});
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
