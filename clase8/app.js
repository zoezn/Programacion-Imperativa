/*
let edad = -3;
if (edad < 0) {
  console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else if (edad < 18) {
  console.log("No puede pasar al bar.");
} else if (edad == 21) {
  console.log("Bienvenido, felicitaciones por llegar a la mayoria de edad.");
} else if (edad < 21) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else {
  console.log("Puede pasar al bar y tomar alcohol.");
}

if (edad % 2 !== 0 && edad > 0) {
  console.log("¿Sabías que tu edad es impar? ");
} else {
  null;
}

/* Declarar una función llamada totalAPagar() que reciba como parametros, vehiculo y
litrosConsumidos.
A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones.
● Si el vehículo es “coche”, el precio por litro es de $86,
● Si es “moto” ha de ser $70.
● Si es “autobús” ha de ser $55.
● Si los litros consumidos están entre 0 y 25 se ha de añadir $50 al total a pagar.
● Si los litros consumidos es mayor a 25 se ha de añadir $25 al total a pagar.*/
/*
function totalAPagar(vehiculo, litrosConsumidos) {
  if (vehiculo == "coche" && litrosConsumidos > 0 && litrosConsumidos < 25) {
    let precioLitro = 86;
    let precio = litrosConsumidos * precioLitro;
    return (totalAPagar = precio + 50);
  } else if (
    vehiculo == "coche" &&
    litrosConsumidos > 25 &&
    litrosConsumidos > 0
  ) {
    let precioLitro = 86;
    let precio = litrosConsumidos * precioLitro;
    return (totalAPagar = precio + 25);
  }

  if (vehiculo == "moto" && litrosConsumidos > 0 && litrosConsumidos < 25) {
    let precioLitro = 70;
    let precio = litrosConsumidos * precioLitro;
    return (totalAPagar = precio + 50);
  } else if (
    vehiculo == "moto" &&
    litrosConsumidos > 25 &&
    litrosConsumidos > 0
  ) {
    let precioLitro = 70;
    let precio = litrosConsumidos * precioLitro;
    return (totalAPagar = precio + 25);
  }

  if (vehiculo == "autobus" && litrosConsumidos > 0 && litrosConsumidos < 25) {
    let precioLitro = 55;
    let precio = litrosConsumidos * precioLitro;
    return (totalAPagar = precio + 50);
  } else if (
    vehiculo == "autobus" &&
    litrosConsumidos > 25 &&
    litrosConsumidos > 0
  ) {
    let precioLitro = 55;
    let precio = litrosConsumidos * precioLitro;
    return (totalAPagar = precio + 25);
  } else {
    return null;
  }
}

console.log(totalAPagar("autobus", 26)); */
/*
function esDivisible(num1, num2) {
  if (num1 % num2 === 0) {
    return 'el numero ${num1} es divisible por ${num2}';
  } else {
    return 'el numero ${num1} NO es divisible por ${num2}';
  }
}
console.log(esDivisible(15, 2));
*/
/*
Crear una función llamada mayorMenorIgual, la cual recibe 2 parámetros numéricos, y deberá indicar 
si el número es menor, mayor o igual al segundo parámetro. Deberá retornar el siguiente mensaje según 
corresponda. Si es menor: “El número (N1) es menor que (N2)”; Si es mayor: "El número (N1) es mayor que (N2)"; 
Si es igual: "El número (N1) es igual a (N2)". (Al momento de ingresar la respuesta en el form se deberá ingresar 
  la invocación/ejecución de la función). Ej: mayorMenorIgual(15,3) // “El número 15 es mayor que 3”
*/
/*
function mayorMenorIgual(num1, num2) {
  if (num1 < num2) {
    return "El número " + num1 + " es menor que " + num2;
  } else if (num1 > num2) {
    return "El número " + num1 + " es mayor que " + num2;
  } else if (num1 == num2) {
    return "El número " + num1 + " es igual a " + num2;
  }
}
console.log(mayorMenorIgual(10, 2));
*/
/*
Crea una función llamada generacion, la cual reciba por parámetro el año de nacimiento y retorne 
la generación a la que pertenece según las siguientes características: "Baby boomer" si es menor o igual 
a 1964"; Generación X" si es entre 1965 y 1981; "Millennial" si es entre 1982 y 1997"; Generación Z" si 
es mayor a 1997. (Al momento de ingresar la respuesta en el form se deberá ingresar la invocación/ejecución de la función).
 Ej: generacion(1993) // "Millennial" */

 /*
 function generacion(anio) {
   if (anio <= 1964) {
     return "Baby boomer";
   } else if (anio >= 1965 && anio <= 1981) {
     return "Generación X";
   } else if (anio >= 1982 && anio <= 1997) {
     return "Millennial";
   } else if (anio > 1997) {
     return "Generación Z";
   }
 }

 console.log(generacion(1993));
 */

 /* Crear la función mayorMenorQue100, la misma recibe dos números como parámetro. 
 Deberá sumarlos y retornar “La suma de (N1) y (N2), es menor que 100” en el caso que la suma de 
 ambos sea menor que 100; “La suma de (N1) y (N2), es mayor que 100” si dicha suma es mayor; o
  “La suma de (N1) y (N2) es exactamente 100” en el caso de que la suma de 100. 
  (Al momento de ingresar la respuesta en el form se deberá ingresar la invocación/ejecución de la función). 
  Ej.: mayorMenorQue100(57, 43) // “La suma de 57 y 43 es exactamente 100” */

  function mayorMenorQue100(num1, num2) {
    let total = num1 + num2;
    if (total < 100) {
      return "La suma de " + num1 + " y " + num2 + ", es menor que 100";
    } else if (total > 100) {
      return "La suma de " + num1 + " y " + num2 + ", es mayor que 100";
    } else if (total == 100) {
      return "La suma de " + num1 + " y " + num2 + " es exactamente 100";
    }
  }

  console.log(mayorMenorQue100(60, 50));