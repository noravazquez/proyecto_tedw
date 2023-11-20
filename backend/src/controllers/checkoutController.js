exports.aplicarCuponDescuento = async (req, res) => {
    try {
      // Inserte funcion para hacer descuento
      res.json({ message: 'Cupón aplicado correctamente' });
    } catch (error) {
      console.error('Error al aplicar cupón de descuento:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  exports.realizarCompra = async (req, res) => {
    try {
      // Inserte insercion a la bd
      res.json({ message: 'Compra realizada con éxito' });
    } catch (error) {
      console.error('Error al realizar la compra:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };