const { Book } = require("../models");

exports.getAllBooks = async (req, res) => { 
  try {
    const books = await Book.findAll();  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => { // Controlador para obtener un libro por ID
  try {
    const { id } = req.params; // Extraer id
    const book = await Book.findByPk(id); // Utilizamos el método 'findByPk' de Sequelize para buscar el libro por su clave primaria (ID)
    if (book) {
      res.json(book); // Si se encuentra el libro, enviamos la respuesta en formato JSON con los datos del libro
    } else {
      res.status(404).json({ error: "Book not found" }); //Controlar el error
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBook = async(req, res)=>{
  try{
    const {title,author, pusblishedYear} = req.body;
    const newBook = await Book.create({title, author, pusblishedYear})
    res.status(201).json(newBook);
  }catch(error){
    res.status(500).json({error: error.message});
  }
}