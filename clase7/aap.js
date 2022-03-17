/*Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura
debe ser mayor a 1,30 m.*/

let montaniaRusa= edad>12 && estatura>1.30
let edad= 13
let estatura= 1.80

console.log("Puede subir a la montaña rusa? " + montaniaRusa)

/*Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos
debe usar el flash.*/

function flash(luz, movimiento){
    return luz == true || movimiento == true 
}

console.log("Se debe usar flash? " + flash(false, true))

/*Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones
parciales, o si obtiene un 4 en el examen final.*/

function pasarNivel(pParcial, sParcial, final){
    return ((pParcial > 7 && sParcial > 7) || final >=4)
}

console.log("Pasará de nivel? " + pasarNivel(6,8,5))

/*Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, si tocó sus
prácticas de piano y lo hizo de memoria.*/

function verTV(tarea, practicasPiano, deMemoria){
    return (tarea == true && (practicasPiano == true && deMemoria == true))
}

console.log("Puede ver la TV? " + verTV(true, true, false))