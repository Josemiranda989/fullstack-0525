let products = ["monitor", "teclado", "mouse", "webcam", "microfono"];

// for (let i = 0; i < products.length; i++) {
//     console.log( i+1 + " - Producto: " + products[i] + ".");
//     console.log(`${i + 1} - Producto: ${products[i]}.`);    
// }

for (const prod of products) {
    console.log(`Producto: ${prod}.`)
}