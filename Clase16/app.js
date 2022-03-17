/* 1. Descargá el archivo JSON y guardalo en una carpeta de trabajo donde también
crearás un archivo de JavaScript en el que establecerás el módulo de lectura y
escritura. En tu archivo de JavaScript requerí el módulo nativo File System para
poder trabajar con sus funcionalidades.*/

const fs = require("fs");

/* 2. Ahora vas a realizar tu primera función, la de lectura de archivos. ¿Qué función del
módulo fs podés utilizar para realizar una lectura sincrónica del archivo JSON?
Creá una función que reciba como parámetro un string con el nombre del archivo */

const leerJson = function (nombreArchivo) {
  let respuesta = JSON.parse(
    fs.readFileSync(__dirname + "/" + nombreArchivo + ".json", "utf-8")
  );
  return respuesta;
};

// console.log(leerJson("AUTOS"));

/* Una vez creada la función de lectura, harás lo propio con la función de escritura.
Creá una función que reciba como parámetros el nombre del archivo y los datos a
convertir en JSON. Para poder crear tu base de datos en JSON utilizarás la
función de lectura para poder manipular el listado de autos —modificar y agregar
autos—, y la función de escritura para sobreescribir nuestro JSON con la nueva
lista actualizada cuando sea necesario. */

let dato = {
  marca: "Cosa",
  modelo: "Cosa2",
  anio: 2021,
  precio: 652770,
  patente: "WAU329",
  vendido: false,
};

const escribirJson = function (nombreArchivo, datosAConvertir) {
  let escritura = JSON.stringify(datosAConvertir);
  return fs.writeFileSync(__dirname + "/" + nombreArchivo + ".json", escritura);
};

// console.log(escribirJson('AUTOS', dato))

/* 4. Una vez creadas nuestras funciones, necesitamos poder exportarlas para
utilizarlas en otros archivos que necesitemos. María te dejo un ejemplo de cómo
podrías modificar tu código para que sea más práctico a la hora de modularizar: */

const jsonHelper = {
  leerJson: function (nombreArchivo) {
    let respuesta = JSON.parse(
      fs.readFileSync(__dirname + "/" + nombreArchivo + ".json", "utf-8")
    );
    return respuesta;
  },
  escribirJson: function (nombreArchivo, datos) {
    let escritura = JSON.stringify(datosAConvertir);
    return fs.writeFileSync(
      __dirname + "/" + nombreArchivo + ".json",
      escritura
    );
  },
};

module.exports = jsonHelper


/* 5. Una vez exportadas las funciones —o el objeto si utilizaste el ejemplo del punto
anterior—, requerí estas funcionalidades en un nuevo archivo de JavaScript, y
revisá que todo funcione correctamente. */






