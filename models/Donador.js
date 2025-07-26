// models/Donador.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definimos el modelo Donador
const Donador = sequelize.define('Donador', {
  ID_Donador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre_Completo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CURP: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  Tipo_Sangre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Ubicacion: {
    type: DataTypes.STRING,
  },
  Ultima_Donacion: {
    type: DataTypes.DATE,
  },
  Disponible: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  Fecha_Registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'Donador',
  timestamps: false,
});

module.exports = Donador;
