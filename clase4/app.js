let cajonRemeras = "pantalones";
let cajonPantalones = "remeras";

console.log("antes de los cambios");
console.log("cajon de remeras: " + cajonRemeras);
console.log("cajon de pantalones: " + cajonPantalones);
console.log("-------------------");

let enLaCama = cajonRemeras;
cajonRemeras = cajonPantalones;
cajonPantalones = enLaCama;

/* cajonPantalones = cajonRemeras
cajonRemeras = cajonPantalones */

console.log("despues de los cambios");
console.log("cajon de remeras: " + cajonRemeras);
console.log("cajon de pantalones: " + cajonPantalones);
