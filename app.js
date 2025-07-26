const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

// Rutas
const donadorRoutes = require('./routes/donadorRoutes');
const receptorRoutes = require('./routes/receptorRoutes');
const donacionRoutes = require('./routes/donacionRoutes');
const mensajeRoutes = require('./routes/mensajeRoutes');
const adminRoutes = require('./routes/adminRoutes'); // Importamos administrador

dotenv.config();

const app = express();
app.use(express.json());

// Endpoint de prueba
app.get('/', (req, res) => {
  res.send('API de Donación de Sangre Activa');
});

// Montar rutas
app.use('/api/donadores', donadorRoutes);
app.use('/api/receptores', receptorRoutes);
app.use('/api/donaciones', donacionRoutes);
app.use('/api/mensajes', mensajeRoutes);
app.use('/api/administradores', adminRoutes); // Montamos rutas admin

// Conexión a BD y servidor
const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a SQL Server exitosa.');
    return sequelize.sync(); // Crea tablas si no existen
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });
