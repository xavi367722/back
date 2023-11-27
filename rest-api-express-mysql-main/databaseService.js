require('dotenv').config()
const knex = require('knex');

const databaseService = () => {
   const knex = require("knex")({
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB,
    },
  });
//-------------------------------------------------tablas--------------------------------------------------------------------------------------------------------------------------
    const table = "empleados";
    const table2 = "inventario";
    const table3 = "pedidos";
    const table4 = "productos";
    const table5 = "provedor";
    const table6 = "venta";
    const table7 = "usuarios"
//------------------------------------------------busqueda-------------------------------------------------------------------------------------------------------------------
    function buscarEmpleadoPorId(ID_empleado) {
        return knex(table).where({ID_empleado: ID_empleado}).first();
};

function buscarInventarioPorId(ID_Producto) {
    return knex(table2).where({ID_Producto: ID_Producto}).first();

};

function buscarPedidosPorId(ID_pedidos) {
    return knex(table3).where({ID_pedidos: ID_pedidos}).first();

};

function buscarProductosPorId(ID_Producto) {
    return knex(table4).where({ID_Producto: ID_Producto}).first();

};

function buscarProvedorPorId(ID) {
    return knex(table5).where({ID: ID}).first();

};

function buscarVentaPorId(ID_venta) {
    return knex(table6).where({ID_venta: ID_venta}).first();

};

const leerEmpleados = (ID_empleado) => {
    return knex(table).select();
  };

  const leerInventario = (ID_Producto) => {
    return knex(table2).select();
  };

  const leerPedidos = (ID_pedidos) => {
    return knex(table3).select();
  };

  const leerProductos = (ID_Producto) => {
    return knex(table4).select();
  };

  const leerProvedores = (ID) => {
    return knex(table5).select();
  };

  const leerVenta = (ID_venta) => {
    return knex(table6).select();
  };

//------------------------------------------------------CREACION------------------------------//------------------------------------------------------------------------------------//
const crearEmpleados = ({ ID_empleado,Nombre_Empleado,Numero}) => {
  return knex(table).insert({
    ID_Empleado: ID_empleado,
    Nombre_Empleado: Nombre_Empleado,
    Numero: Numero
    
  });
};

const crearInverntario = ({ ID_Producto,Cantidad,Ubicacion,Fecha}) => {
  return knex(table2).insert({
    ID_Producto: ID_Producto,
    Cantidad: Cantidad,
    Ubicacion: Ubicacion,
    Fecha: Fecha
    
  });
};

const crearPedidos = ({ ID_Pedidos,Fecha,Precio,ID_Producto,Cantidad}) => {
  return knex(table3).insert({
    ID_Pedidos: ID_Pedidos,
  
   Fecha: Fecha,
   Precio: Precio,
   ID_Producto: ID_Producto,
   Cantidad: Cantidad

    
    
  });
};

const crearProductos = ({ ID_producto,Precio,Nombre_producto,ID }) => {
  return knex(table4).insert({
    ID_producto: ID_producto,
    Precio: Precio,
    Nombre_producto: Nombre_producto,
    ID: ID
    
  });
};

const crearProvedor = ({ ID,Nombre_Empresa,Telefono}) => {
  return knex(table5).insert({
    ID: ID,
    Nombre_Empresa: Nombre_Empresa,
    Telefono: Telefono
    
  });
};

const crearVenta = ({ ID_venta,Precio_total,ID_Producto,Cantidad,Fecha}) => {
  return knex(table6).insert({
    ID_venta: ID_venta,
    Precio_total: Precio_total,
    ID_Producto: ID_Producto,
    Cantidad: Cantidad,
    Fecha: Fecha
    
  });
};

const crearUsuario = ({Usuario,Contraseña,ID_Usuario}) =>{
  return knex(table7).insert({
    Usuario: Usuario,
    Contraseña: Contraseña,
    ID_Usuario: ID_Usuario
  });
};

//______________________________________________________________________________________-Eliminacion_____________________________________________________________________________

const eliminarEmpleado = (ID_empleado) => {
  return knex(table).where({ ID_empleado: ID_empleado }).del();
};

const eliminarInventario = (ID_Producto) => {
  return knex(table2).where({ ID_Producto: ID_Producto }).del();
};

const eliminarPedidos = (ID_Pedidos) => {
  return knex(table3).where({ID_Pedidos: ID_Pedidos}).del();
};

const eliminarProductos = (ID_Producto) => {
  return knex(table4).where({ID_Producto: ID_Producto}).del();

};

const eliminarProvedor = (ID) => {
  return knex (table5).where({ID: ID}).del();
};

const eliminarVenta = (ID_venta) => {
  return knex (table6).where({ID_venta: ID_venta}).del();
};
  

//--------------------------------------------------------------MODIFICAR--------------------------------------------------------------------------------------------------------------------------
const actualizarEmpleado = (ID_empleado, datosActualizados) => {
  return knex(table).where({ ID_empleado: ID_empleado }).update(datosActualizados);
};

const actualizarInventarios = (ID_Producto, datosActualizados) => {
  return knex(table2).where({ ID_Producto: ID_Producto }).update(datosActualizados);
};


const actualizarPedidos = (ID_Pedidos,datosActualizados) => {
  return knex (table3).where({ID_Pedidos: ID_Pedidos}).update(datosActualizados)
};

const actualizarProductos = (ID_Producto,datosActualizados) => {
  return knex(table4).where({ID_Producto: ID_Producto}).update(datosActualizados)
};

const actualizarProvedor = (ID,datosActualizados) => {
  return knex(table5).where({ID: ID}).update(datosActualizados)
};

const actualizarVenta = (ID_venta,datosActualizados) => {
  return knex (table6).where({ID_venta: ID_venta}).update(datosActualizados)
};

const actualizarUsuario = (ID_Usuario,datosActualizados) => {
  return knex (table7).where({ID_Usuario: ID_Usuario}).update(datosActualizados)
};
//__________________________________________________________________________La cosa fea donde declaro______________________________________________________________________________________________________


return {
buscarEmpleadoPorId,
buscarInventarioPorId,
buscarPedidosPorId,
buscarProductosPorId,
buscarProvedorPorId,
buscarVentaPorId,
//_________________________
crearEmpleados,
crearInverntario,
crearPedidos,
crearProductos,
crearProvedor,
crearVenta,
//_______________________
eliminarEmpleado,
eliminarInventario,
eliminarPedidos,
eliminarProductos,
eliminarProvedor,
eliminarVenta,
//_____________________
actualizarEmpleado,
actualizarInventarios,
actualizarPedidos,
actualizarProductos,
actualizarProvedor,
actualizarVenta,
//____________________
leerEmpleados,
leerInventario,
leerPedidos,
leerProductos,
leerProvedores,
leerVenta,

crearUsuario,
actualizarUsuario
  };
};


module.exports = {
  databaseService,
};
