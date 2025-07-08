// Conversor de peso a dolar
function conversor(importeAConvertir) {
    let precioDolar = 1280;
    let resultado = importeAConvertir / precioDolar;
    return resultado;
}
// const juan = conversor(200000);
// const miguel = conversor(140000);

// Impresora de credenciales
let impresora = function (nombre, apellido) {
    if (nombre != undefined && apellido != undefined) {
        console.log(
            `Invitado ${nombre[0].toUpperCase()}${apellido[0].toUpperCase()}`
        );
    } else {
        console.log(`Invitado Sin Nombre`);
    }
};

// impresora("mario", "bravo");
// impresora();

// Calculadora 1.0
// function calculadora(operacion, n1, n2) {
//     let resultado;
//     if (operacion == "sumar") {
//         resultado = n1 + n2;
//     }
//     if (operacion == "restar") {
//         resultado = n1 - n2;
//     }
//     if (operacion == "dividir") {
//         resultado = n1 / n2;
//     }
//     if (operacion == "multiplicar") {
//         resultado = n1 * n2;
//     }
//     return resultado;
// }

function calculadora(operacion, n1, n2) {
    switch (operacion) {
        case "sumar":
            return n1 + n2;
        case "restar":
            return n1 - n2;
        case "multiplicar":
            return n1 * n2;
        case "dividir":
            return n1 / n2;
        default:
            console.log("Ingresa la operacion y 2 numeros");

            break;
    }
}

// let prueba1 = calculadora("sumar", 1, 2);
// let prueba2 = calculadora("restar", 1, 2);
// let prueba3 = calculadora("multiplicar", 1, 2);
// console.log(prueba1);
// console.log(prueba2);
// console.log(prueba3);

// Arrow Function
function conversor(importeAConvertir) {
    let precioDolar = 1280;
    let resultado = importeAConvertir / precioDolar;
    return resultado;
}

let conversorFlecha = importeAConvertir => {
    let precioDolar = 1280;
    let resultado = importeAConvertir / precioDolar;
    return resultado;
};

let sumarFlecha = (a,b,c) => a+b+c;
// console.log(sumarFlecha(1,3,5));

// Callbacks
// setTimeout( function(){
//     console.log('Hola Mundo!')
// } , 2000)

let saludo = function(){
    console.log('Hola Mundo!')
}

function saludarRandom(tiempo){
    setTimeout(saludo , tiempo)
}

// saludarRandom(1000)
// saludarRandom(5000)

// Funciones callback
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
};
function iniciales(nombre, apellido) {
    return nombre[0].toUpperCase() + apellido[0].toUpperCase();
};
function mailGenerator(nombre, apellido) {
    return nombre.toLowerCase() + '.' + apellido.toLowerCase() + '@gmail.com';
};
// Funcion que utiliza un callback
function saludar(nombre, apellido, callback) {
    return '¡Hola ' + callback(nombre, 
apellido) + '!';
};
console.log(saludar('Juanito', 'Sánchez', nombreCompleto))
console.log(saludar('Juanito', 'Sánchez', iniciales))
console.log(saludar('Juanito', 'Sánchez', mailGenerator
))