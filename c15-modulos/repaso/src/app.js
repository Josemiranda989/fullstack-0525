let movies = require('./data/movies')

// Necesito un listado de cada pelicula que se muestre por consola que contenga esto "1- NombrePelicuta, duracion: XXX minutos"
// Version 2.0 Guardar en un array esto

// for (let i = 0; i < movies.length; i++) {
    // console.log(`${movies[i].id}- ${movies[i].title}, duracion: ${movies[i].length} minutos`);        
// }

// console.table(movies)

// const path = require('path')

// console.log(path.join(__dirname, "tools", "calculator.js"))
// console.log('D:\Development\FullStackOndemand\fullstack-0525\c15-modulos\repaso\src\tools\calculator.js')

console.log(movies[2]);
console.log(typeof movies);

let moviesConvertido = JSON.stringify(movies)
console.log(moviesConvertido[0]);
console.log(moviesConvertido);
console.log(typeof moviesConvertido);

let moviesReturn = JSON.parse(moviesConvertido)
console.log(moviesReturn[0]);
console.log(moviesReturn);
console.log(typeof moviesReturn);