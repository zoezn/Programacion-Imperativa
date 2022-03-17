// Final Programación Imperativa

const jsonHelper = require("./jsonHelper");
const nombre = "Zoe Jimenez";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

const restaurante = {
  recetas: jsonHelper.leerJson("recetas"),
  buscarPorNombre: function (nombre) {
    return this.recetas.find((recetas) => recetas.nombre == nombre);
  },

  filtrarPorTiempo: function (tiempoMaximo) {
    return this.recetas.filter((receta) => receta.tiempo < tiempoMaximo);
  },

  ordenarPorDificultad: function () {
    return this.recetas.sort((a, b) => b.dificultad - a.dificultad);
  },

  duracionPromedio: function () {
    arrayRecetas = this.recetas;
    let sumatoria = arrayRecetas.reduce(
      (acum, receta) => acum + receta.tiempo, 0);
    return (
      "La duración promedio de todas las recetas es de " +
      (sumatoria / this.recetas.length).toFixed(2) +
      " minutos."
    );
  },

  incrementarPrecio: function (nombre) {
    let recetaEncontrada = this.buscarPorNombre(nombre);
    if (recetaEncontrada) {
      recetaEncontrada.precio += (recetaEncontrada.precio * 3) / 100;
      jsonHelper.escribirJson("recetas", this.recetas);
      return recetaEncontrada;
    }
  },
};


/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre }]);

console.log("---------- ↧ .C. Buscar ↧ ----------");
console.log(restaurante.buscarPorNombre("Fajitas de verduras y tofu"));
console.log("---------- ↥ ---------- ↥ ----------");

console.log("---------- ↧ .D. Filtrar ↧ ----------");
console.log(restaurante.filtrarPorTiempo(30));
console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .E. Ordenar ↧ ----------");
console.log(restaurante.ordenarPorDificultad());
console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .F. Total ↧ ----------");
console.log(restaurante.duracionPromedio());
console.log("---------- ↥ ----------- ↥ ----------");

console.log("---------- ↧ .G. Modificar ↧ ----------");
console.log(restaurante.incrementarPrecio("Pastel de remolacha salado"));
console.log("---------- ↥ --------- ↥ ----------");
