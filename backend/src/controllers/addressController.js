const Cliente = require('../models/Cliente');
const Direccion = require('../models/Direccion');

// Obtener ambas direcciones de facturación y envío del cliente
exports.obtenerDirecciones = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
      include: [
        { model: Direccion, as: 'DireccionEnvio' },
        { model: Direccion, as: 'DireccionFacturacion' },
      ],
    });

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    res.json({ direcciones: cliente });
  } catch (error) {
    console.error('Error al obtener direcciones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Actualizar las direcciones de facturación y envío del cliente
exports.actualizarDirecciones = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
      include: [
        { model: Direccion, as: 'DireccionEnvio' },
        { model: Direccion, as: 'DireccionFacturacion' },
      ],
    });

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    // Actualizar los datos de facturación y envío
    await cliente.DireccionEnvio.update(req.body.direccionEnvio);
    await cliente.DireccionFacturacion.update(req.body.direccionFacturacion);

    res.json({ message: 'Direcciones actualizadas correctamente' });
  } catch (error) {
    console.error('Error al actualizar direcciones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};