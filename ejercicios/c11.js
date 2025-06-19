// Datos del jugador
let nombre = "Leo";
let edad = 17;
let precision = 0.85;
let tieneEscudo = true;

// Operaciones
let nuevaEdad = edad + 1;
let doblePrecision = precision * 2;
let esMayorDeEdad = edad >= 18;
let esJugadorProtegidoYPreciso = tieneEscudo && precision > 0.7;

// Mostrar resultados
console.log("Nombre del jugador:", nombre);
console.log("Edad actual:", edad);
console.log("Edad el próximo año:", nuevaEdad);
console.log("Precisión:", precision);
console.log("Doble de precisión:", doblePrecision);
console.log("¿Es mayor de edad?", esMayorDeEdad);
console.log("¿Tiene escudo y buena precisión?", esJugadorProtegidoYPreciso);
