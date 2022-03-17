/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// 1. 
const jsonHelper = module.require("./jsonHelper.js")
listaPeliculas = jsonHelper.leerJson("peliculas")

// 2.
const gestionDePeliculas = {
    // 2.A.
    peliculas: listaPeliculas,
    // 2.B.
    listarPeliculas: function (arrayPeliculas = this.peliculas) {
        arrayPeliculas.forEach(elemento => {
            console.log(
                elemento.titulo + " de " +
                elemento.director + ". Duracion de " +
                elemento.duracionEnMinutos + " minutos, " +
                (elemento.ganoOscar ? "premiada (" : "sin premios (") +
                elemento.calificacionIMDB + " en IMDB)"
            )
        });
    },
    // 2.C.
    buscarPorId: function (idBuscado, arrayPeliculas = this.peliculas) {
        return arrayPeliculas.find(elemento => elemento.id === idBuscado)
    },
    // 2.D.
    peliculasPremiadas: function () {
        return this.peliculas.filter(elemento => elemento.ganoOscar === true)
    },
    // 2.E.
    filtrarPorDuracion: function (duracionMinima, duracionMaxima, arrayPeliculas = this.peliculas) {
        return arrayPeliculas.filter(elemento => elemento.duracionEnMinutos >= duracionMinima && elemento.duracionEnMinutos <= duracionMaxima)
    },
    // 2.F.
    ordenarPorCalificacion: function (arrayPeliculas = this.peliculas) {
        return arrayPeliculas.sort((elementoA, elementoB) => elementoA.calificacionIMDB - elementoB.calificacionIMDB)
    },
    // 2.G.
    duracionTotal: function (arrayPeliculas = this.peliculas) {
        return "La duración en minutos de todas las peliculas sumadas es de " + arrayPeliculas.reduce((acumulador, elemento) => acumulador + elemento.duracionEnMinutos, 0) + " Minutos."
    },
    // 2.H.
    premiarPeliculaPorTitulo: function (peliculaParaPremiar, arrayPeliculas = this.peliculas) {
        arrayPeliculas.find(elemento => elemento.titulo === peliculaParaPremiar).ganoOscar = true
        jsonHelper.escribirJson("peliculas",this.peliculas)
        return arrayPeliculas.find(elemento => elemento.titulo === peliculaParaPremiar)
    },
    // 2.I.
    eliminarPorId: function (idBuscado, arrayPeliculas = this.peliculas) {
        this.peliculas = arrayPeliculas.filter(elemento => elemento.id != idBuscado)
        jsonHelper.escribirJson("peliculas",this.peliculas)
        return this.peliculas 
    }
}



/******************************/
/* Ejecución de las consignas */
/******************************/

console.log("***** 2.B. *****");
gestionDePeliculas.listarPeliculas()
console.log("****************\n");

console.log("***** 2.C. *****");
console.table(gestionDePeliculas.buscarPorId(3))
console.log("****************\n");

console.log("***** 2.D. *****");
console.table(gestionDePeliculas.peliculasPremiadas())
console.log("****************\n");

console.log("***** 2.E. *****");
console.table(gestionDePeliculas.filtrarPorDuracion(70, 100))
console.log("****************\n");

console.log("***** 2.F. *****");
console.table(gestionDePeliculas.ordenarPorCalificacion())
console.log("****************\n");

console.log("***** 2.G. *****");
console.log(gestionDePeliculas.duracionTotal())
console.log("****************\n");

console.log("***** 2.H. *****");
console.table(gestionDePeliculas.premiarPeliculaPorTitulo("Career Girls"))
console.log("****************\n");

console.log("***** 2.I. *****");
console.table(gestionDePeliculas.eliminarPorId(8))
console.log("****************\n");