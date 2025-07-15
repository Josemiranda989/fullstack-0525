var prompt = require("prompt-sync")();
const funciones = require("./src/tools/funciones");

// Mostrar opciones

console.log(`Bienvenida a la agenda 2.0`);
console.log(`1- Ver lista de tareas`);
console.log(`2- Agregar nuevo todo`);
console.log(`3- Elimintar`);

let opcion = prompt(`Seleccione que numero de opcion quiere realizar \n`);

switch (opcion) {
    case "1":
        console.log("Listando las tareas");
        console.log(funciones.verTodos());
        break;
    case "2":
        // Preguntarle como se llama la tarea
        let respuesta = prompt("Ingrese la tarea que desea agregar \n");
        // Agregar esa tarea al listado con la funcion creada
        funciones.agregarTodo(respuesta);

        break;
    case "3":
        let idSeleccionado = prompt(
            "Ingrese el id de la tarea que desea eliminar \n"
        );
        funciones.eliminarTodo(idSeleccionado);

        break;
    default:
        console.log(
            "Ingrese un valor correcto en base a las opciones disponibles, 1,2,3"
        );
        break;
}
