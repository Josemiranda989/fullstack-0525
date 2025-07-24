// const fs = require('fs')

// const logsFile = fs.readFileSync('./logs/logs.txt', 'utf-8')
// console.log(logsFile);

// agrega 5 veces un mensaje 'estatico' a un archivo con contenido
// for (let i = 0; i <5; i++) {
//     fs.appendFileSync("./logs/logs.txt", "\n Este mensaje se genera automaticmente 5 veces")
// }

// Funcion que imprime x cantidad de veces un mensaje 'estatico' a un archivo con contenido
// function automatizacion(iteraciones) {
//     for (let i = 0; i < iteraciones;  i++) {
//         fs.appendFileSync("./logs/logs.txt", "\n Este mensaje se genera automaticmente 5 veces")
//     }
// }
// automatizacion(2)

// Funcion que imprime x cantidad de veces un mensaje personalizado' a un archivo con contenido
// function automatizacion2(iteraciones, mensaje) {
//     let data = `- ${mensaje} \n`
//     for (let i = 0; i < iteraciones;  i++) {
//         fs.appendFileSync("./logs/logs.txt", data)
//     }
// }
// automatizacion2(4,'Probando la automatizacion')
// automatizacion2(2,'No esta de más probar de nuevo')
// const fechaActual = new Date();

// if(fs.existsSync('./data/canciones.txt')){
//     fs.appendFileSync('./data/canciones.txt', '\n Luis Miguel - Ahora te puedes marchar')
//     fs.appendFileSync('./logs/logs-app.txt', `${fechaActual} - Se actualizó el archivo canciones \n`)
// } else {
//     fs.writeFileSync('./data/canciones.txt', 'Exitos del 2000')
//     fs.writeFileSync('./logs/logs-app.txt', `${fechaActual} - Se creo un nuevo archivo canciones \n`)
// }

// fs.appendFileSync('./logs/logs-app.txt', `${fechaActual} - Se ejecuto la app \n`)

// fs.unlinkSync('./data/.txt')

/* DOLAR INFO */
const fs = require("fs");
const path = require("path");

// 1- Obtener la ruta del json
const dolarsPath = path.join(__dirname, "data", "dolares.json");

// 2- Leer el json
const dolarsJSON = fs.readFileSync(dolarsPath, "utf-8");
// console.log(typeof dolars);
// console.log(dolars[3]);

// 3- Convertir de JSON a JS
const dolars = JSON.parse(dolarsJSON);
// console.log(dolars[3]);

// EXTRA - MOSTRAR POR CONSOLA LOS NOMBRES
function listarDolares() {
    console.log("Bienvenido a la App de dolars");
    for (let i = 0; i < dolars.length; i++) {
        let dolar = dolars[i];
        // console.log(
        //     `${dolars[i].nombre} - C: ${dolars[i].compra} / V: ${dolars[i].venta}}`
        // );
        console.log(
            `${dolar.nombre} - C: ${dolar.compra} / V: ${dolar.venta}`
        );
        fs.appendFileSync('./logs/dolars-log.txt',  `${dolar.nombre} - C: ${dolar.compra} / V: ${dolar.venta} \n`)
    }
}
listarDolares()