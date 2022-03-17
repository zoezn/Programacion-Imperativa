
const jsonHelper = require("./leerEscrituraJSON.js");

let listaAutos = jsonHelper.leerJson("AUTOS");

let concesionaria = {
    autos: listaAutos,
    agregarAuto: function (marca, modelo, anio, precio, patente){
        let nuevoAuto = {
            marca: marca,
            modelo: modelo,
            anio: anio,
            precio: precio,
            patente: patente,
            vendido: false,
        }
        this.autos.push(nuevoAuto)
        jsonHelper.escribirJson("AUTOS", this.autos)
    },
    venderAuto: function(patente){
        for (let i = 0; i < this.autos.length; i++) {
            if(this.autos[i].patente = patente){
                this.autos[i].vendido = true
            }
            jsonHelper.escribirJson("AUTOS", this.autos)
        }
    },
    totalDeVentas: function(){
        let suma = 0;
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].vendido == true){
                suma += this.autos[i].precio;
            }
        }
        return suma;
    }
    /* totalDeVentas: function () {
        let ganancia = 0;
        for (let i = 0; i < this.autos.length; i++) {
          if (this.autos[i].vendido) {
            ganancia += this.autos[i].precio;
          }
        }
        return "La ganancia total actual es de: $" + ganancia;
      }, */
}

console.log(concesionaria.totalDeVentas())

/* Crear un método llamado totalDeVentas que recorra la lista de autos y 
vaya sumando todos los precios de vehículos que hayan sido vendidos, y 
que retorne el precio total. */




