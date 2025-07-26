const Administrador = require('../models/Administrador');

// Obtener todos los administradores
exports.obtenerAdministradores = async (req, res) => {
  try {
    const lista = await Administrador.findAll();
    res.json(lista);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener administradores' });
  }
};

// Crear un nuevo administrador
exports.crearAdministrador = async (req, res) => {
  try {
    const nuevo = await Administrador.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear administrador', detalle: error.message });
  }
};

// Actualizar administrador
exports.actualizarAdministrador = async (req, res) => {
  try {
    const { id } = req.params;
    const [actualizado] = await Administrador.update(req.body, {
      where: { ID_Administrador: id }
    });

    if (actualizado === 0) {
      return res.status(404).json({ mensaje: 'Administrador no encontrado' });
    }

    res.status(200).json({ mensaje: 'Administrador actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar administrador', error: error.message });
  }
};

// Eliminar administrador
exports.eliminarAdministrador = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Administrador.destroy({
      where: { ID_Administrador: id }
    });

    if (eliminado === 0) {
      return res.status(404).json({ mensaje: 'Administrador no encontrado' });
    }

    res.status(200).json({ mensaje: 'Administrador eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar administrador', error: error.message });
  }
};
