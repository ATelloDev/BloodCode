// models/Receptor.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definición del modelo Receptor
const Receptor = sequelize.define('Receptor', {
  ID_Receptor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre_Receptor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Tipo_Sangre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Correo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  TelefonoUbicacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Hospital: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Urgencia: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  Estado_Solicitud: {
    type: DataTypes.STRING,
    defaultValue: 'Pendiente'
  },
  Fecha_Solicitud: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'Receptor',
  timestamps: false
});

module.exports = Receptor;
