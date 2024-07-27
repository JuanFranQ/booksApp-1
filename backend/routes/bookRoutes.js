const express = require("express");
const router = express.Router();
const bookController = require("../controlador/bookController");

router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getById);
router.post('/books', bookController.createBook);

module.exports = router;
