/* 5. Una vez exportadas las funciones —o el objeto si utilizaste el ejemplo del punto
anterior—, requerí estas funcionalidades en un nuevo archivo de JavaScript, y
revisá que todo funcione correctamente. */

const fs = require("fs");

const jsonHelper = require('./app');

console.log(jsonHelper.leerJson('AUTOS'));

/* 6. En el archivo de JavaScript en el que tenemos requeridas nuestras funciones de
lectura/escritura de archivos, creá el objeto literal concesionaria. Luego agregá
la propiedad autos, la cual deberá tener la lista de vehículos del archivo JSON
(previamente parseada). Verificá que puedas visualizar esta propiedad
correctamente. */

let concesionaria = {




    
}
