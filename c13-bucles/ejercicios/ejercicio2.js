const prompt = require('prompt-sync')();
// EJERCICIO 2
const numsec = 4;
let numelegido;
do {
    numelegido = parseInt(prompt("Elige un numero entre 1 y 10 \n"));
      if (numelegido === numsec) {
        console.log("Felicidades! Adivinaste el numero secreto.");
    } else {
    console.log("Ese no es el numero secreto. Intentalo de nuevo.");
    }
} while (numelegido !== numsec);