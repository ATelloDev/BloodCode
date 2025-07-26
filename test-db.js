// test-db.js
const sequelize = require('./config/database');

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a SQL Server exitosa con Windows Authentication.');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });