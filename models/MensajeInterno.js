const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Donador = require('./Donador');

// Definimos el modelo MensajeInterno
const MensajeInterno = sequelize.define('MensajeInterno', {
  ID_Mensaje: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ID_Remitente: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ID_Destinatario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Asunto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Contenido: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  Fecha_Envio: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  Status: {
    type: DataTypes.STRING,
    defaultValue: 'No leído'
  }
}, {
  tableName: 'MensajeInterno',
  timestamps: false
});

// Relaciones con la tabla Donador
MensajeInterno.belongsTo(Donador, { foreignKey: 'ID_Remitente', as: 'Remitente' });
MensajeInterno.belongsTo(Donador, { foreignKey: 'ID_Destinatario', as: 'Destinatario' });

module.exports = MensajeInterno;
