// Ej 1
let edad = 16;

if (edad < 13) {
  console.log("Acceso denegado: muy joven");
} else if (edad >= 13 && edad < 18) {
  console.log("Acceso limitado: contenido para adolescentes");
} else {
  console.log("Acceso completo: bienvenido");
}

// Ej 2
let personaje = "mago";

let resultado;

switch (personaje) {
  case "mago":
    resultado = {
      nombre: "Mago",
      descripcion: "Domina la magia"
    };
    break;
  case "guerrero":
    resultado = {
      nombre: "Guerrero",
      descripcion: "Fuerza bruta"
    };
    break;
  case "arquero":
    resultado = {
      nombre: "Arquero",
      descripcion: "Precisión y distancia"
    };
    break;
  default:
    resultado = {
      nombre: "Desconocido",
      descripcion: "Personaje no reconocido"
    };
    break;
}

console.log(resultado);