/*
let numbers =[22, 33, 54, 66, 72]
console.log(numbers.length )


let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5])


let str = "un string cualquiera"
let arrayAleatorio= ["Digital", "House", 'true', "string", "123","false", '54', str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1])
*/
/*
let peliculas = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella']
  function mayuscula (peliculas){
      return peliculas.toUpperCase()
  }
console.log(mayuscula())*/
/*
let estudiantes = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android",
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack",
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS",
  },
];

estudiantes.push(
  {
    nombre: "Juan",

    promedio: 5,

    curso: "iOS",
  },
  {
    nombre: "Miguel",

    promedio: 2,

    curso: "Android",
  }
);
console.log(estudiantes); */
let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];
function act(peliculas) {
  for (let i = 0; i <= peliculas.length; i++) {
    let valor = peliculas[i].toUpperCase();
    console.log(valor);
  }
}

act(peliculas)