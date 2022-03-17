function coro(animal, sonido) {
  const texto =
    "old mc donalds tenia un " +
    animal +
    " que hace " +
    sonido +
    ", " +
    sonido +
    ", " +
    sonido;
  return texto;
}

console.log(coro("cerdo", "oink"));
console.log(coro("vaca", "muuu"));

function f(x) {
  return 2 * x + 5;
}

const pepe = 20;
console.log(f(2));
console.log(f(5));
console.log(f(pepe));
