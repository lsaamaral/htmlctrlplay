const express = require('express');
const router = express.Router();

const validateTitle = require("../middlewares/validateTitle");
const bookController = require('../controllers/bookController');

router.post("/books", validateTitle, bookController.createBook);

module.exports = router