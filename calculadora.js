function suma(numUno, numDos) {
  return numUno + numDos;
}

function resta(numUno, numDos) {
  return numUno - numDos;
}

function multiplicacion(numUno, numDos) {
  return numUno * numDos;
}

function division(numUno, numDos) {
  return numUno / numDos;
}

function cuadradoDeUnNumero(numUno) {
  return multiplicacion(numUno, numUno);
}

function promedioDeTresNumeros(numUno, numDos, numTres) {
  let resultado = suma(numUno, numDos) + numTres;

  return division(resultado, 3);
}

function calcularPorcentaje(numUno,porcentaje) {
    let resultado = multiplicacion(numUno,porcentaje)
    return division(resultado, 100)
}

console.log("------------Testeo de funciones----------");
console.log(suma(25, 30));
console.log(resta(85, 15));
console.log(multiplicacion(30, 60));
console.log(division(0, 90));
console.log(cuadradoDeUnNumero(7));
console.log(promedioDeTresNumeros(80, 70, 65));
console.log(calcularPorcentaje(200, 25));
