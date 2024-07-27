const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Importamos la instancia de conexión a la base de datos configurada
const Book = sequelize.define( // Definimos el modelo 'Book' utilizando la instancia de Sequelize
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedYear: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "books",
  }
);

module.exports = Book;
