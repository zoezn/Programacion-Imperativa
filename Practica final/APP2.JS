/* function encontreUn5 (numeros){
    let numero = 0
    do{
        console.log(numeros[numero]);
        numero++;
    } while(numeros[numero] != 5 );
    return("Se encontró un 5!");
    }

    console.log(encontreUn5([6,8,7,10,5])) */

/* ---------------------------------------------------------------- */

/* Para este ejercicio te damos la función tablaDeMultiplicar ya definida, la cual recibe un número como parámetro. 
Queremos que al ejecutarse la función muestre por consola la tabla de multiplicar del 1 al 10 del número que reciba.

Por ejemplo si el número que pasamos por parámetro es 5, la función deberá imprimir:

5 * 1 = 5
5 * 2 = 10

5 * 3 = 15

...

hasta llegar a multiplicarlo por 10. */

/* function tablaDeMultiplicar(numero) {
    let i = 1
    while (i <= 10){
        let cuenta = numero * i
        console.log(numero + " * " + i + " = " + cuenta);
        i++
    }
}

console.log(tablaDeMultiplicar(2)) */

/* let estudiantes = [
  { nombre: "John", promedio: 8.5, aprobado: true },
  { nombre: "Jane", promedio: 7, aprobado: true },
  { nombre: "June", promedio: 3, aprobado: false },
];

let aprobados = estudiantes.filter(function (gente) {
    if (gente.aprobado == true){ 
    return gente}
});
let desaprobados = estudiantes.filter(function (gente) {
    if (gente.aprobado == false){ 
    return gente}
});

console.log(aprobados, desaprobados); */

/* let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce(function(acum,num){
    return acum+num
})

console.log(totalVueltas) */
