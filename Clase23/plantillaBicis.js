// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const jsonHelper = require('./jsonHelper')
// Crear un objeto literal que represente la aplicación. 
// el objeto será la representación de nuestra carrera

const carrera = {
    bicicletas: jsonHelper.leerJson("bicicletas"),
    bicicletasPorTanda: 4,
    ciclistasHabilitados: function(){
        return this.bicicletas.filter((ciclista) => ciclista.dopaje === false)
    },
    buscarPorId: function(numero){
        return this.bicicletas.find((ciclista) => ciclista.id == numero)
    },
    filtrarPorPeso: function(numero){
        return this.ciclistasHabilitados().filter((ciclista) => ciclista.peso <= numero)
    },
    

}



/* Agregar un método filtrarPorPeso que permita filtrar los ciclistas habilitados, 
siempre y cuando su peso sea menor o igual al enviado como argumento.
    Este método recibirá por parámetro un number que represente el peso a buscar.
    Este método devolverá un array con todos los ciclistas que cumplan con la condición 
mencionada.
    En caso de no encontrar ningún ciclista, devolverá un array vacío.
    Este método debe usar ciclistasHabilitados para buscar incluir solamente 
aquellos ciclistas que estén habilitados.


 */


// B

// C

// D

// E

// F

// G

// H

// I

// J

// K

/******************************/
/* Ejecución de las consignas */
/******************************/

/* console.log("---------- ↧ .D. ↧ ----------");

console.log(carrera.ciclistasHabilitados());

console.log("---------- ↧ .E.  ↧ ----------");

console.log(carrera.buscarPorId(1));

console.log("---------- ↧ .F. ↧ ----------");

console.log(console.log(carrera.filtrarPorPeso(7)));

console.log("---------- ↧ .G. ↧ ----------");

console.log("---------- ↥ ----------- ↥ ----------");

console.log("---------- ↧ .H.  ↧ ----------");

console.log("---------- ↥ --------- ↥ ----------");

console.log("---------- ↧ .I.  ↧ ----------");

console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .J.  ↧ ----------");

console.log("---------- ↥ ------------- ↥ ----------");

console.log("---------- ↧ .K.  ↧ ----------");

console.log("---------- ↥ ------------- ↥ ----------"); */