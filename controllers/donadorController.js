// controllers/donadorController.js
const Donador = require('../models/Donador');

// Obtener todos los donadores
exports.obtenerDonadores = async (req, res) => {
  try {
    const donadores = await Donador.findAll();
    res.json(donadores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener donadores' });
  }
};

// Crear un donador nuevo
exports.crearDonador = async (req, res) => {
  try {
    const nuevo = await Donador.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear donador', detalle: error.message });
  }
};

// Actualizar un donador por ID
exports.actualizarDonador = async (req, res) => {
  try {
    const { id } = req.params;
    
    const [actualizado] = await Donador.update(req.body, {
      where: { ID_Donador: id }
    });

    if (actualizado === 0) {
      return res.status(404).json({ mensaje: 'Donador no encontrado' });
    }

    res.status(200).json({ mensaje: 'Donador actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar donador', error: error.message });
  }
};

// Eliminar un donador por ID
exports.eliminarDonador = async (req, res) => {
  try {
    const { id } = req.params;
    
    const eliminado = await Donador.destroy({
      where: { ID_Donador: id }
    });

    if (eliminado === 0) {
      return res.status(404).json({ mensaje: 'Donador no encontrado' });
    }

    res.status(200).json({ mensaje: 'Donador eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar donador', error: error.message });
  }
};
