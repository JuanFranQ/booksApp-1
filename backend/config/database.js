const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Library", "postgres", "3578", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false  // Configuración global para desactivar timestamps
  }
});

module.exports = sequelize;
