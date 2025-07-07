// const express = require("express");
// const connectDB = require("./config/config");

// const Book = require("./models/book");
// const User = require("./models/user");

// const app = express();
// connectDB();
// app.use(express.json());

// app.post("/api/books", async (req, res) => {
//     try {
//         const { title, author, year, genre} = req.body;
//         const newBook = new Book({ title, author, year, genre});
//         await newBook.save();
//         res.status(201).json(newBook);
//     } catch (error) {
//         res.status(500).json({ error: "Erro ao criar o livro" });
//     }
// });

// app.listen(3000, () => {
//     console.log('Servidor rodando na porta 3000');
// });

const express = require("express");
const connectDB = require("./config/config");

const User = require("./models/user");
const Book = require("./models/book");

const app = express();
connectDB();
app.use(express.json());

app.post("/api/books", async (req, res) => {
    try {
        const {title, author, year, genre} = req.body;
        const book = new Book({title, author, year, genre});
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        console.error("Erro ao criar livro:", error);
        res.status(500).json({error: "Erro ao criar livro"});
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});