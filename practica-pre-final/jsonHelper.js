const fs = require("fs");

const jsonHelper = {
  leer: function (nombreArchivo) {
    return JSON.parse(
      fs.readFileSync(__dirname + "/" + nombreArchivo + ".json", "UTF-8")
    );
  },
  escribir: function (nombreArchivo, datos) {
    datos = datos.sort((a, b) => a.id - b.id);
    return fs.writeFileSync(
      __dirname + "/" + nombreArchivo + ".json",
      JSON.stringify(datos, null, 2)
    );
  },
};

module.exports = jsonHelper;