const jsonHelper = require('./jsonHelper')
datosPeliculas = jsonHelper.leer("peliculas")

// Crear objeto "app"
let app = {
    datos: datosPeliculas,
    // A
    mejoresCalificadas: function () {
        return this.datos.filter((pelicula) => pelicula.calificacionIMDB >= 6)
    },
   

    // B 
    buscarPelicula: function(id){
        return this.datos.find((pelicula) => pelicula.id === id)
    },


    // C
    ordenarPorAnio: function(arrayPeliculas = this.datos){
        return arrayPeliculas.sort((a , b) => a.anio-b.anio)
    },

/* D. Crear método llamado "duracionTotal". Usando REDUCE se debe calcular el 
total de minutos de duración de todas las películas (debe retornar número ) */

    // D
    duracionTotal: function(arrayPeliculas = this.datos){
        return arrayPeliculas.reduce((acum, pelicula) => acum + pelicula.duracion , 0)
    },
    //EL 0 CERO ES MUY IMPORTANTE PARECE

/* E. Crear método llamado "habilitar". Usando FOREACH se debe habilitar la propiedad 
"disponibleEnApp" a todas las películas que aún no lo están, SE DEBE SOBREESCRIBIR EL JSON 
"peliculas", recordar hacer una copia del original. (no debe retornar nada, pero 
    se puede usar console.log o table, para chequear si los datos fueron modificados) */

    peliculasNoDisponibles: function(){
        return this.datos.filter(pelicula => !pelicula.disponibleEnApp)
    },


    habilitar: function(){
        let noDisponibles = this.datos.filter(pelicula => !pelicula.disponibleEnApp);
        noDisponibles.forEach(pelicula => {
            pelicula.disponibleEnApp = true
        });
        jsonHelper.escribir("peliculas", this.datos)
    },


    lasMasNuevas: function () {
        let arrayOrdenado = this.ordenarPorAnio()
        let masNuevas = arrayOrdenado.slice(-3) 
        return masNuevas

    }
}






/*------------------------------------------------ 
INVOCACIONES
--------------------------------------------------- */

 console.log("****** A.mejoresCalificadas *****");

console.log(console.log(app.mejoresCalificadas()));

console.log("****** B.buscarPelicula *****");

console.log(console.log(app.buscarPelicula(1)));

 console.log("****** C.ordenarPorAnio *****");

console.log(console.log(app.ordenarPorAnio())); 

console.log("****** D.duracionTotal *****");

console.log(console.log(app.duracionTotal()));

console.log("****** E.habilitar *****");

console.log(console.log(app.habilitar())); 

console.log("****** F.lasMasNuevas *****");

console.log(console.log(app.lasMasNuevas()));  