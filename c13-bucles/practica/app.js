// for ( let i=1; i <= 5; i++) {
//     console.log('El valor de i en esta vuelta es ' + i);    
// }

// let dolar = 1231;

// let listadoDePrecios = [ 200000, 100000, 400000]

// for (let i = 0; i <= listadoDePrecios.length; i++) {
//         console.log('El  valor del producto convertido a dolar es: ');        
//         console.log(listadoDePrecios[i] / dolar);        
// }

let personas = [
    {
        dni: 12345678,
        nombre: "Jose",
        domicilio: "Tucuman",
        telefono: 3580421,
        edad: 80,
        admin: false
    },
    {
        dni: 12345678,
        nombre: "Lucas",
        domicilio: "Bariloche",
        telefono: 3580421,
        edad: 15,
        admin: false
    },
    {
        dni: 12345678,
        nombre: "Dani",
        domicilio: "Bogota",
        telefono: 3580421,
        edad: 55,
        admin: true
    },
    {
        dni: 12345678,
        nombre: "Gabriel",
        domicilio: "BS AS",
        telefono: 3580421,
        edad:30,
        admin: true
    }
]

for (let i = 0; i < personas.length; i++) {
      console.log('El usuario con nombre ' + personas[i].nombre + ' tiene el dni numero: ' + personas[i].dni);

    if (personas[i].edad >= 15 && personas[i].edad < 60 && personas[i].admin == true) {
        console.log("Cumple la condicion ❤️");
        
    }
}



