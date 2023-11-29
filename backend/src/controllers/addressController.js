const Cliente = require('../models/clientes');
const Direccion = require('../models/direccions');

// Obtener ambas direcciones de facturación y envío del cliente
exports.obtenerDirecciones = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
      include: [
        { model: Direccion },
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

// Actualizar la direccion 
exports.actualizarDirecciones = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
      include: [{ model: Direccion }],
    });

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    console.log('Cliente encontrado');

    const direccionId = req.body.Direccions.id_direccion;

    const direccion = cliente.Direccions.find(d => d.id_direccion === parseInt(direccionId));

    if (!direccion) {
      return res.status(404).json({ message: 'Dirección no encontrada para el cliente' });
    }

    await direccion.update(req.body.Direccions);

    res.json({ message: 'Dirección actualizada correctamente' });

  } catch (error) {
    console.error('Error al actualizar direcciones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.eliminarDireccion = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
      include: [{ model: Direccion }],
    });

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    const direccionId = req.params.id_direccion; 

    const direccion = cliente.Direccions.find(d => d.id_direccion === parseInt(direccionId));

    if (!direccion) {
      return res.status(404).json({ message: 'Dirección no encontrada para el cliente' });
    }

    await direccion.destroy();

    res.json({ message: 'Dirección eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar dirección:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};




exports.agregarDireccion = async (req, res) => {
  try {
    const cliente = await Cliente.findOne({
      where: { id_usuario: req.user.id_usuario },
    });

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    const nuevaDireccion = await Direccion.create({
      calle: req.body.calle,
      ciudad: req.body.ciudad,
      estado: req.body.estado,
      codigo_postal: req.body.codigo_postal,
      pais: req.body.pais,
      id_cliente: req.body.id_cliente,
    });

    res.json({ message: 'Dirección agregada correctamente', nuevaDireccion });
  } catch (error) {
    console.error('Error al agregar dirección:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
