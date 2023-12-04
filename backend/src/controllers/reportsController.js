const  OrdenCompra  = require('../models/ordencompras');
const  DetalleCarrito = require('../models/detallecarritos');
const  Cliente = require('../models/clientes');
const  Carrito = require('../models/carritos');
const  Producto = require('../models/productos');
const Direccions = require('../models/direccions');
const MetodoPago = require('../models/metodopagos')
const { Op, fn, col } = require('sequelize');


// Reporte Total de ventas semanales
exports.totalVentasSemanal = async (req, res) => {
  try {
    const { year, week } = req.body;

    if (!year || !week) {
      return res.status(400).json({ error: 'Se requieren los parámetros year y week.' });
    }

    // Obtener todos los carritos con sus detalles, clientes y órdenes relacionadas
    const carritos = await Carrito.findAll({
      include: [
        {
          model: Cliente,
          attributes: ['id_usuario'],
        },
        {
          model: DetalleCarrito,
          include: [
            {
              model: OrdenCompra,
              where: {
                fecha: obtenerRangoFechaS(year, week),
              },
            },
          ],
        },
      ],
    });

    // Inicializar totales
    const totales = {
      ordenes: 0,
      clientes: new Set(),
      productos: new Set(),
      montoTotal: 0, 
    };

    // Calcular totales
    carritos.forEach((carrito) => {
      // Contar órdenes
      totales.ordenes += carrito.DetalleCarritos.length;

      // Agregar clientes, productos y sumar montos
      carrito.DetalleCarritos.forEach((detalle) => {
        totales.clientes.add(carrito.id_cliente);
        totales.productos.add(detalle.id_producto);
        totales.montoTotal += carrito.total; 
      });
    });

    // Convertir conjuntos a longitud para obtener la cuenta
    totales.clientes = totales.clientes.size;
    totales.productos = totales.productos.size;

    res.json({
      totales,
    });
  } catch (error) {
    console.error('Error al calcular las ventas totales:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


// Función para obtener el rango de fechas según el año y la semana del año
function obtenerRangoFechaS(year, week) {
  const inicioSemana = new Date(year, 0, 1 + (week - 1) * 7);
  const finSemana = new Date(year, 0, 1 + (week - 1) * 7 + 6);
  
  return {
    [Op.gte]: inicioSemana,
    [Op.lte]: finSemana,
  };
}


//Total de ventas mensual
exports.totalVentasMensual = async (req, res) => {
  try {
    const { year, month } = req.body;
    
    if (!year || !month) {
      return res.status(400).json({ error: 'Se requieren los parámetros year y month.' });
    }
    
    // Obtener todos los carritos con sus detalles, clientes y órdenes relacionadas
    const carritos = await Carrito.findAll({
      include: [
        {
          model: Cliente,
          attributes: ['id_usuario'],
        },
        {
          model: DetalleCarrito,
          include: [
            {
              model: OrdenCompra,
              where: {
                fecha: obtenerRangoFecha(year, month),
              },
            },
          ],
        },
      ],
    });
    
     // Inicializar totales
     const totales = {
      ordenes: 0,
      clientes: new Set(),
      productos: new Set(),
      montoTotal: 0, 
    };

    // Calcular totales
    carritos.forEach((carrito) => {
      // Contar órdenes
      totales.ordenes += carrito.DetalleCarritos.length;

      // Agregar clientes, productos y sumar montos
      carrito.DetalleCarritos.forEach((detalle) => {
        totales.clientes.add(carrito.id_cliente);
        totales.productos.add(detalle.id_producto);
        console.log(`Total del carrito (antes de sumar): ${carrito.total}`);

        // Sumar el total del carrito al monto total (convertir a número)
        totales.montoTotal += Number(carrito.total);

        // Loggear el monto total después de sumar
        console.log(`Monto total después de sumar: ${totales.montoTotal}`);
      });
    });

    // Convertir conjuntos a longitud para obtener la cuenta
    totales.clientes = totales.clientes.size;
    totales.productos = totales.productos.size;

    
    res.json({
      totales,
    });
  } catch (error) {
    console.error('Error al calcular las ventas totales:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Función para obtener el rango de fechas según el año y el mes
function obtenerRangoFecha(year, month) {
  const inicioMes = new Date(year, month - 1, 1);
  const finMes = new Date(year, month, 0); // El día 0 del próximo mes es el último día del mes actual
  
  return {
    [Op.gte]: inicioMes,
    [Op.lte]: finMes,
  };
}


//total de ventas anual
exports.totalVentasAnual = async (req, res) => {
  try {
    const { year } = req.body; 
    
    if (!year) {
      return res.status(400).json({ error: 'Se requiere el parámetro year.' });
    }
    
    // Obtener todos los carritos con sus detalles, clientes y órdenes relacionadas
    const carritos = await Carrito.findAll({
      include: [
        {
          model: Cliente,
          attributes: ['id_usuario'],
        },
        {
          model: DetalleCarrito,
          include: [
            {
              model: OrdenCompra,
              where: {
                fecha: obtenerRangoFechaAnual(year),
              },
            },
          ],
        },
      ],
    });
    
     // Inicializar totales
     const totales = {
      ordenes: 0,
      clientes: new Set(),
      productos: new Set(),
      montoTotal: 0, 
    };

    // Calcular totales
    carritos.forEach((carrito) => {
      // Contar órdenes
      totales.ordenes += carrito.DetalleCarritos.length;

      // Agregar clientes, productos y sumar montos
      carrito.DetalleCarritos.forEach((detalle) => {
        totales.clientes.add(carrito.id_cliente);
        totales.productos.add(detalle.id_producto);
        totales.montoTotal += Number(carrito.total); 
      });
    });

    // Convertir conjuntos a longitud para obtener la cuenta
    totales.clientes = totales.clientes.size;
    totales.productos = totales.productos.size;
    
    res.json({
      totales,
    });
  } catch (error) {
    console.error('Error al calcular las ventas totales:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


// Función para obtener el rango de fechas según el año
function obtenerRangoFechaAnual(year) {
  const inicioAno = new Date(year, 0, 1);
  const finAno = new Date(year + 1, 0, 0); // El día 0 del próximo año es el último día del año actual
  
  return {
    [Op.gte]: inicioAno,
    [Op.lte]: finAno,
  };
}


// Reporte Total clientes, ordenes y productos comprados
exports.estadisticasClientes = async (req, res) => {
  try {
    const totalClientes = await Cliente.count();
    const totalOrdenes = await OrdenCompra.count();
    const totalProductosComprados = await DetalleCarrito.sum('cantidad');
    
    res.json({
      totalClientes,
      totalOrdenes,
      totalProductosComprados,
    });
  } catch (error) {
    console.error('Error al calcular las estadísticas de clientes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


//reporte total de productos vendidos
exports.totalProductos = async (req, res) => {
  try {
    const { year } = req.body;

    if (!year) {
      return res.status(400).json({ error: 'Se requiere el parámetro year.' });
    }

    // Obtener todos los carritos con sus detalles, clientes y órdenes relacionadas
    const carritos = await Carrito.findAll({
      include: [
        {
          model: Cliente,
          attributes: ['id_usuario'],
        },
        {
          model: DetalleCarrito,
          include: [
            {
              model: OrdenCompra,
              where: {
                fecha: obtenerRangoFechaAnual(year),
              },
            },
            {
              model: Producto,
              attributes: ['producto'],
            },
          ],
        },
      ],
    });

    // Inicializar totales
    const totales = {
      productos: {},
    };

    // Calcular totales
    carritos.forEach((carrito) => {
      carrito.DetalleCarritos.forEach((detalle) => {
        const nombreProducto = detalle.Producto.producto;

        if (totales.productos[nombreProducto]) {
          // El producto ya existe en el objeto, incrementar la cantidad
          totales.productos[nombreProducto] += detalle.cantidad;
        } else {
          // El producto no existe en el objeto, agregarlo con la cantidad actual
          totales.productos[nombreProducto] = detalle.cantidad;
        }
      });
    });

    res.json({
      totales,
    });
  } catch (error) {
    console.error('Error al calcular las ventas totales:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


//reporte de clientes totales registrados
exports.totalClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    const totales = {
      total: 0,
      clientes: [],
    };

    clientes.forEach((cliente) => {
      totales.clientes.push({
        nombre: cliente.nombre,
        apellido_paterno: cliente.apellido_paterno,
        apellido_materno: cliente.apellido_materno,
      });
    });

    totales.total = totales.clientes.length;

    res.json({
      totales,
    });
  } catch (error) {
    console.error('Error al calcular las ventas totales:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.obtenerOrdenesConDetalles = async (req, res) => {
  try {
    const ordenes = await OrdenCompra.findAll({
      attributes: ['id_orden_compra', 'fecha', 'estado_orden'],
      include: [
        {
          model: Cliente,
          attributes: [
            [fn('concat', col('nombre'), ' ', col('apellido_paterno'), ' ', col('apellido_materno')), 'cliente'],
          ],
        },
        {
          model: DetalleCarrito,
          attributes: [],
        },
        {
          model: Direccions,
          attributes: [
            [fn('concat', col('calle'), ', ', col('ciudad'), ', ', col('estado')), 'direccion'],
          ],
        },
      ],
    });

    res.json(ordenes);
  } catch (error) {
    console.error('Error al obtener órdenes con detalles:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.ordenes = async (req, res) => {
  try {
    const ordenes = await OrdenCompra.findAll({
      attributes: [
        'id_orden_compra',
        'fecha',
        'estado_orden',
        [fn('concat', col('Cliente.nombre'), ' ', col('Cliente.apellido_paterno'), ' ', col('Cliente.apellido_materno')), 'cliente'],
        [fn('concat', col('Direccion.calle'), ', ', col('Direccion.ciudad'), ', ', col('Direccion.estado')), 'direccion'],
        [fn('concat', col('DetalleCarrito->Producto.producto')), 'producto'],
        [fn('concat', col('DetalleCarrito.cantidad')), 'cantidad'],
        [fn('concat', col('DetalleCarrito->Carrito.total')), 'total'],
        [fn('concat', col('MetodoPago.metodo_pago')), 'metodo_pago'],
      ],
      include: [
        {
          model: Cliente,
          as: 'Cliente',
        },
        {
          model: DetalleCarrito,
          as: 'DetalleCarrito',
          include: [
            {
              model: Carrito,
              as: 'Carrito',
            },
            {
              model: Producto,
              as: 'Producto',
              attributes: ['producto'], // Agrega esto para evitar seleccionar todas las columnas de Producto
            },
          ],
        },
        {
          model: Direccions,
          as: 'Direccion',
        },
        {
          model: MetodoPago,
          as: 'MetodoPago',
        },
      ],
    });

    res.json(ordenes);
  } catch (error) {
    console.error('Error al obtener órdenes con detalles:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};