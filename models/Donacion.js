// models/Donacion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Importamos relaciones
const Donador = require('./Donador');
const Receptor = require('./Receptor');

// Definimos el modelo Donacion
const Donacion = sequelize.define('Donacion', {
  ID_Donacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Fecha_Encontrado: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  Fecha_Donacion: {
    type: DataTypes.DATE,
    allowNull: true
  },
  Hospital: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Estado: {
    type: DataTypes.STRING,
    defaultValue: 'Pendiente'
  }
}, {
  tableName: 'Donacion',
  timestamps: false
});

// Relaciones (llaves foráneas)
Donador.hasMany(Donacion, { foreignKey: 'ID_Donador' });
Donacion.belongsTo(Donador, { foreignKey: 'ID_Donador' });

Receptor.hasMany(Donacion, { foreignKey: 'ID_Receptor' });
Donacion.belongsTo(Receptor, { foreignKey: 'ID_Receptor' });

module.exports = Donacion;
