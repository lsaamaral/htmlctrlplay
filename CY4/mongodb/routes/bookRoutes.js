const express = require('express');
const router = express.Router();

const validateTitle = require("../middlewares/validateTitle");
const bookController = require('../controllers/bookController');

router.post("/books", validateTitle, bookController.createBook);

router.get("/books/:id", bookController.getBook);

router.patch("/books/:id", bookController.updateBook);

router.delete("/books/:id", bookController.deleteBook);

module.exports = router