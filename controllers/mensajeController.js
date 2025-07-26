const MensajeInterno = require('../models/MensajeInterno');
const Donador = require('../models/Donador');

// Obtener todos los mensajes
exports.obtenerMensajes = async (req, res) => {
  try {
    const mensajes = await MensajeInterno.findAll({
      include: [
        { model: Donador, as: 'Remitente' },
        { model: Donador, as: 'Destinatario' }
      ]
    });
    res.json(mensajes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener mensajes' });
  }
};

// Crear un nuevo mensaje
exports.crearMensaje = async (req, res) => {
  try {
    const nuevo = await MensajeInterno.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear mensaje', detalle: error.message });
  }
};

// Actualizar un mensaje
exports.actualizarMensaje = async (req, res) => {
  try {
    const { id } = req.params;
    const [actualizado] = await MensajeInterno.update(req.body, {
      where: { ID_Mensaje: id }
    });

    if (actualizado === 0) {
      return res.status(404).json({ mensaje: 'Mensaje no encontrado' });
    }

    res.status(200).json({ mensaje: 'Mensaje actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar mensaje', error: error.message });
  }
};

// Eliminar un mensaje
exports.eliminarMensaje = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await MensajeInterno.destroy({
      where: { ID_Mensaje: id }
    });

    if (eliminado === 0) {
      return res.status(404).json({ mensaje: 'Mensaje no encontrado' });
    }

    res.status(200).json({ mensaje: 'Mensaje eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar mensaje', error: error.message });
  }
};
