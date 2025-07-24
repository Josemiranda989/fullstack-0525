// modulos necesarios
const {readFileSync} = require("fs");
const {join} = require("path");

// ruta de productos
const productsPath = join(__dirname, "data", "alfajores.json");

// Traer el listado
const products = JSON.parse(readFileSync(productsPath, "utf-8"));

// Foreach - Listar  nombre y peso
// products.forEach((prod, i) => {
//     console.log(`${i + 1} - ${prod.nombre} tiene ${prod.pesoGramos}g`);
//     // console.log((i + 1) + " - " + prod.nombre + " tiene " + prod.pesoGramos + "g");
// });

// Foreach - Listar alfajores premiums y clasicos
// products.forEach(prod =>{
//     if(prod.esPremium == true){
//        console.log("Premium -" + prod.nombre)
//     } else {
//         console.log("Clasicos -" + prod.nombre)
//     }
// })

// Map - retorna alfajores premiums y clasicos
const resultado = products.map((prod) => {
    if (prod.esPremium == true) {
        return "Premium -" + prod.nombre;
    } else {
        return "Clasicos -" + prod.nombre;
    }
});
// console.log(resultado)

// Modificar array de productos para que se agreguen descuento en cada elemento
const productosNuevos = products.map((prod, i) => {
    if (prod.pesoGramos < 50) {
        return {
            ...prod,
            enOferta: true,
        };
    } else {
        return {
            ...prod,
            enOferta: false,
        };
    }
});
// console.log(productosNuevos);

// Filter
const AlfaDobles = products.filter((prod) => {
        return prod.pesoGramos > 60
})
// console.log(AlfaDobles);

// Filtra alfajores menores a 60g
const AlfaFilter = products.filter((prod) => {
        // return prod.nombre.includes('a')
        return prod.pesoGramos < 60
})
// console.log(AlfaFilter)


// Find
const AlfaBuscado = products.find((prod) => {
        return prod.nombre.includes('Espacio')
})
// console.log(AlfaBuscado)

const id = 4
const AlfaBuscado2 = products.find((prod) => {
        return prod.id == id
})
// console.log(AlfaBuscado2)

// Reduce
const pesoTotal =  products.reduce((acumulador, prod)=>{
    return acumulador + prod.pesoGramos
}, 1000)
// console.log(pesoTotal);

/* SPREAD OPERATOR */
const helados = ['Oreo', 'Frambuesa', 'Vainilla', 'Oreo', 'Frambuesa', 'Vainilla', 'Oreo', 'Frambuesa', 'Vainilla']
helados.push('Granizado')
const toppings = ['Jarabe', 'Mini Oreos', 'Chips']
const menu = ['Tomate',...toppings, ...helados]
// console.log(menu);

let parte = ['los', 'cumplas'];
let oracion = ['Que', ...parte, 'feliz'];
// console.log(oracion.join(' '));

let notas = [9.3, 8.5,1, 3.2, 7, 10];
// console.log(Math.min(...notas))

let losOtros = (n1, n2, n3, ...losOtros) => {
    console.log(n1)
    console.log(n3)
    console.log(losOtros)
};

// losOtros(1,5,7,4,7,8,5,3,3,5,7,8)
// losOtros(1,5,73,3,5,7,8)
// losOtros(1,8,5,3,3,5,7,8)


let sumatoria = function (...numeros) {
    return numeros.reduce((acum, num) => acum + num, 0)
}
// console.log(sumatoria(2,4,5,6));
// console.log(sumatoria(2,4));
// console.log(sumatoria(2,4));
// console.log(sumatoria(2,4));
// console.log(sumatoria(2,4,3,5,6,78,8,89));

let {nombre: capitalDelEspacio, relleno} = products[4]
let {nombre,relleno: relleno2} = products[6]

// console.log(capitalDelEspacio)
// console.log(nombre)
// console.log(relleno)
// console.log(relleno2)

const { v4: generadorId } = require('uuid');
console.log(generadorId())