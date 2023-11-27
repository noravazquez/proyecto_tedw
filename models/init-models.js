var DataTypes = require("sequelize").DataTypes;
var _carritos = require("./carritos");
var _categorias = require("./categorias");
var _clientes = require("./clientes");
var _cupondescuentos = require("./cupondescuentos");
var _detallecarritos = require("./detallecarritos");
var _direccions = require("./direccions");
var _metodopagos = require("./metodopagos");
var _ordencompras = require("./ordencompras");
var _productos = require("./productos");
var _proveedors = require("./proveedors");
var _rols = require("./rols");
var _usuariorols = require("./usuariorols");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var carritos = _carritos(sequelize, DataTypes);
  var categorias = _categorias(sequelize, DataTypes);
  var clientes = _clientes(sequelize, DataTypes);
  var cupondescuentos = _cupondescuentos(sequelize, DataTypes);
  var detallecarritos = _detallecarritos(sequelize, DataTypes);
  var direccions = _direccions(sequelize, DataTypes);
  var metodopagos = _metodopagos(sequelize, DataTypes);
  var ordencompras = _ordencompras(sequelize, DataTypes);
  var productos = _productos(sequelize, DataTypes);
  var proveedors = _proveedors(sequelize, DataTypes);
  var rols = _rols(sequelize, DataTypes);
  var usuariorols = _usuariorols(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  detallecarritos.belongsTo(carritos, { as: "id_carrito_carrito", foreignKey: "id_carrito"});
  carritos.hasMany(detallecarritos, { as: "detallecarritos", foreignKey: "id_carrito"});
  productos.belongsTo(categorias, { as: "id_categoria_categoria", foreignKey: "id_categoria"});
  categorias.hasMany(productos, { as: "productos", foreignKey: "id_categoria"});
  carritos.belongsTo(clientes, { as: "id_cliente_cliente", foreignKey: "id_cliente"});
  clientes.hasMany(carritos, { as: "carritos", foreignKey: "id_cliente"});
  direccions.belongsTo(clientes, { as: "id_cliente_cliente", foreignKey: "id_cliente"});
  clientes.hasMany(direccions, { as: "direccions", foreignKey: "id_cliente"});
  ordencompras.belongsTo(clientes, { as: "id_cliente_cliente", foreignKey: "id_cliente"});
  clientes.hasMany(ordencompras, { as: "ordencompras", foreignKey: "id_cliente"});
  carritos.belongsTo(cupondescuentos, { as: "id_cupon_descuento_cupondescuento", foreignKey: "id_cupon_descuento"});
  cupondescuentos.hasMany(carritos, { as: "carritos", foreignKey: "id_cupon_descuento"});
  ordencompras.belongsTo(detallecarritos, { as: "id_detalle_carrito_detallecarrito", foreignKey: "id_detalle_carrito"});
  detallecarritos.hasMany(ordencompras, { as: "ordencompras", foreignKey: "id_detalle_carrito"});
  ordencompras.belongsTo(direccions, { as: "id_direccion_direccion", foreignKey: "id_direccion"});
  direccions.hasMany(ordencompras, { as: "ordencompras", foreignKey: "id_direccion"});
  ordencompras.belongsTo(metodopagos, { as: "id_metodo_pago_metodopago", foreignKey: "id_metodo_pago"});
  metodopagos.hasMany(ordencompras, { as: "ordencompras", foreignKey: "id_metodo_pago"});
  detallecarritos.belongsTo(productos, { as: "id_producto_producto", foreignKey: "id_producto"});
  productos.hasMany(detallecarritos, { as: "detallecarritos", foreignKey: "id_producto"});
  productos.belongsTo(proveedors, { as: "id_proveedor_proveedor", foreignKey: "id_proveedor"});
  proveedors.hasMany(productos, { as: "productos", foreignKey: "id_proveedor"});
  usuariorols.belongsTo(rols, { as: "id_rol_rol", foreignKey: "id_rol"});
  rols.hasMany(usuariorols, { as: "usuariorols", foreignKey: "id_rol"});
  clientes.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(clientes, { as: "clientes", foreignKey: "id_usuario"});
  usuariorols.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(usuariorols, { as: "usuariorols", foreignKey: "id_usuario"});

  return {
    carritos,
    categorias,
    clientes,
    cupondescuentos,
    detallecarritos,
    direccions,
    metodopagos,
    ordencompras,
    productos,
    proveedors,
    rols,
    usuariorols,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
