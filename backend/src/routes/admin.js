const express = require('express');
const {getAllProductos,getProductoById,createProducto,updateProducto,deleteProducto,categoriasController,proveedoresController,rolesController} = require('../controllers/productController');

const router = express.Router();

//Rutas Para cruds productos
router.get('/productos', getAllProductos);
router.get('/productos/:id', getProductoById);
router.post('/productos', createProducto);
router.put('/productos/:id', updateProducto);
router.delete('/productos/:id', deleteProducto);

//Rutas Para cruds categoria
router.get('/categoria', categoriasController.getAllCategoria);
router.get('/categoria/:id', categoriasController.getCategoriaById);
router.post('/categoria', categoriasController.createCategoria);
router.put('/categoria/:id', categoriasController.updateCategoria);
router.delete('/categoria/:id', categoriasController.deleteCategoria);

//Rutas Para cruds Proveedor
router.get('/proveedor', proveedoresController.getAllProveedor);
router.get('/proveedor/:id', proveedoresController.getProveedorById);
router.post('/proveedor', proveedoresController.createProveedor);
router.put('/proveedor/:id', proveedoresController.updateProveedor);
router.delete('/proveedor/:id', proveedoresController.deleteProveedor);

//Rutas Para cruds usuario
router.get('/usuario', getAllUsuario);
router.get('/usuario/:id', getUsuarioById);
router.post('/usuario', createUsuario);
router.put('/usuario/:id', updateUsuario);
router.delete('/usuario/:id', deleteUsuario);

//Rutas Para cruds rol
router.get('/rol', rolesController.getAllRol);
router.get('/rol/:id', rolesController.getRolById);
router.post('/rol', rolesController.createRol);
router.put('/rol/:id', rolesController.updateRol);
router.delete('/rol/:id', rolesController.deleteRol);


module.exports = router;