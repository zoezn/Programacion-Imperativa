const bookstore = {
  libros: [
    {
      titulo: "Los Dias del Venado",
      autor: "Liliana Bodoc",
      editorial: "Debolsillo",
      fechaPublicacion: 2018,
      stock: 76,
      precio: 1399,
    },
    {
      titulo: "Los Dias de la Sombra",
      autor: "Liliana Bodoc",
      editorial: "Debolsillo",
      fechaPublicacion: 2018,
      stock: 29,
      precio: 1399,
    },
    {
      titulo: "Los Dias del Fuego",
      autor: "Liliana Bodoc",
      editorial: "Debolsillo",
      fechaPublicacion: 2018,
      stock: 65,
      precio: 1650,
    },
    {
      titulo: "El Silmarillion",
      autor: "J.r.r. Tolkien",
      editorial: "Minotauro",
      fechaPublicacion: 2010,
      stock: 7,
      precio: 2550,
    },
    {
      titulo: "Trilogia El Señor De Los Anillos",
      autor: "J.r.r. Tolkien",
      editorial: "Minotauro",
      fechaPublicacion: 2002,
      stock: 10,
      precio: 7770,
    },
    {
      titulo: "El Resplandor",
      autor: "Stephen King",
      editorial: "Debolsillo",
      fechaPublicacion: 2012,
      stock: 51,
      precio: 2599,
    },
    {
      titulo: "Doctor Sueño",
      autor: "Setephen King",
      editorial: "Debolsillo",
      fechaPublicacion: 2016,
      stock: 42,
      precio: 2599,
    },
    {
      titulo: "La Sombra",
      autor: "John Katzenbach",
      editorial: "Ediciones B",
      fechaPublicacion: 1995,
      stock: 85,
      precio: 2149,
    },
    {
      titulo: "Primera Persona Del Singular",
      autor: "Haruki Murakami",
      editorial: "Tusquets",
      fechaPublicacion: 2021,
      stock: 60,
      precio: 1790,
    },
    {
      titulo: "Fuego y Sangre",
      autor: "George r.r. Martin",
      editorial: "Plaza & Janes",
      fechaPublicacion: 2018,
      stock: 78,
      precio: 4449,
    },
  ],
  buscarPorTitulo: function (titulo) {
    for (let i = 0; i <= this.libros.length; i++) {
      if (titulo == this.libros[i].titulo) {
        return this.libros[i];
      } else {
        null;
      }
    }
  },
  /*Agregar un método precioPromedio que permita consultar el promedio de precio de libros.
El método deberá recorrer el listado de libros y calcular el promedio de la propiedad precio.
El método deberá retornar un mensaje con el siguiente formato.
ej:  “El precio promedio de cada libro es de: $1800.”*/

  precioPromedio: function () {
    let suma = 0;
    for (let i = 0; i < this.libros.length; i++) {
      suma += this.libros[i].precio;
    }
    return suma / this.libros.length;
  },
};

console.log(bookstore.precioPromedio());

/*modificarStock: function (titulo, nuevoStock){
        let libroEncontrado = this.buscarPorTitulo(titulo)
        libroEncontrado.stock = nuevoStock
        return libroEncontrado
    }
}*/

//console.log(bookstore.modificarStock('Los Dias de la Sombra', 50))
/*
filtrarPorPrecio: function(precio){
    let librosBaratos= []
    for (let i = 0; i < this.libros.length; i++) {
        if (this.libros[i].precio <= precio){
librosBaratos.push(this.libros[i])
        } else {
            null
        }
        
    }
    return librosBaratos
}
}*/

// console.log(bookstore.filtrarPorPrecio(2000))
