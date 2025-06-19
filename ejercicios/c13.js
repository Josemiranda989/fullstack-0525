// Ejercicio 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Ejercicio 2
const numeroSecreto = 7;
let intento = 0;

while (intento !== numeroSecreto) {
  // En un navegador usar: intento = parseInt(prompt("Adiviná el número"));
  // Simulamos intentos:
  intento = Math.floor(Math.random() * 10); // número aleatorio 0-9
  console.log("Intento:", intento);
}

console.log("¡Correcto!");

// Ejercicio 3
let listaCompras = ["manzanas", "pan", "leche", "huevos", "café"];

for (let i = 0; i < listaCompras.length; i++) {
  console.log("Producto:", listaCompras[i]);
}
// for (let producto of listaCompras) {
//   console.log("Producto:", producto);
// }
