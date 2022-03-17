//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

// 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá
//un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y
//retornar el objeto cliente que corresponda con ese nombre ingresado.

//console.log(arrayCuentas.IndexOf("Jacki Shurmer"));

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (titular) {
    for (let i = 0; i <= arrayCuentas.length; i++) {
      if (titular == arrayCuentas[i].titularCuenta) {
        return arrayCuentas[i];
      } else {
        null;
      }
    }
  },
  deposito: function (titular, deposito) {
    for (let i = 0; i <= arrayCuentas.length; i++) {
      if (titular == arrayCuentas[i].titularCuenta) {
        saldoNuevo = deposito + arrayCuentas[i].saldoEnPesos;
        return "Depósito realizado, su nuevo saldo es: " + saldoNuevo;
      } else {
        null;
      }
    }
  },
  extraccion: function (titular, extraccion) {
    for (let i = 0; i <= arrayCuentas.length; i++) {
      if (titular == arrayCuentas[i].titularCuenta) {
        saldoNuevo = arrayCuentas[i].saldoEnPesos - extraccion;
        if (saldoNuevo < 0) {
          return "Fondos insuficientes";
        } else {
          return (
            "Extracción realizada correctamente, su nuevo saldo es: " +
            saldoNuevo
          );
        }
      } else {
        null;
      }
    }
  },
};
