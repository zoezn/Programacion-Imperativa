//1//

function test(pulgadas) {
  const centimetros = 2.54;
  return pulgadas * centimetros;
}

console.log(test(3));

//2//

function web(dominio) {
  const web = "http://www." + dominio + ".com";
  return web;
}

console.log(web("zoe"));

// 3 Crear una función que recibe un string y devuelve la misma frase, pero con admiración.

function exclamacion(frase) {
  const exclama = frase + "!";
  return exclama;
}

console.log(exclamacion("Que lindo dia"));

// 4 Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
function edadPerro(edad) {
  const calculo = edad * 7;
  return calculo;
}

console.log(edadPerro(3));

// 5 Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. Considera que tu mes de trabajo tiene 40 horas.
function calcula(sueldo) {
  const horasDeTrabajo = 40;
  return sueldo / horasDeTrabajo;
}

console.log(calcula(20000));

//Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos//
//y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores //

function calculadorIMC(peso, altura) {
  const IMC = peso / (altura * altura);
  return IMC;
}

console.log(calculadorIMC(75, 1.78));
