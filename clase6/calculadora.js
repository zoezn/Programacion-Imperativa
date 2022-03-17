
function sumar(valor1, valor2){
    return (valor1 + valor2)
}

function restar(valor1, valor2){
    return (valor1 - valor2)
}

function multiplicar(valor1, valor2){
    return (valor1 * valor2)
}

function division(valor1, valor2){
    return (valor1 / valor2)
}

console.log('Testeo de operaciones')
console.log(sumar(5,6))
console.log(restar(10,6))
console.log(multiplicar(5,6))
console.log(division(20,4))
console.log(division(20,0))
console.log(division(0,20))

function cuadradoDeUnNumero(numero){
    return multiplicar(numero,numero)
}
 
console.log(cuadradoDeUnNumero(2,2))

/* casi casi!!!
function promedioDeTresNumeros(valor1, valor2, numero) {
  sumar(valor1, valor2);
  let suma = sumar;
  let sumar3 = suma + numero;
  sumar3 / 3;
}
console.log(promedioDeTresNumeros(12, 8, 10));
*/

function promedioDeTresNumeros(valor1,valor2,valor3){
    let valor4 = sumar(valor1,valor2)
    let sumaTotal = sumar(valor4,valor3)
    let promedio = division(sumaTotal,3)
    return promedio
}

console.log(promedioDeTresNumeros(10,20,40));

