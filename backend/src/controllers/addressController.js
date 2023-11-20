exports.obtenerDirecciones = async (req, res) => {
    try {
      // inserte el obtener ambas direcciones
      res.json({ direcciones });
    } catch (error) {
      console.error('Error al obtener direcciones:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
  
  exports.actualizarDirecciones = async (req, res) => {
    try {
      // Inserte la acatulizacion de la direccion en bd
  
      res.json({ message: 'Direcciones actualizadas correctamente' });
    } catch (error) {
      console.error('Error al actualizar direcciones:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };