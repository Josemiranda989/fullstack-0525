const todos = require("../data/todos.js");

// Esta debe mostrar la lista de todos
function verTodos() {
    return todos;
}

let agregarTodo = function (tarea) {
    const nuevaTarea = {
        id: Date.now(),
        titulo: tarea,
    };
    todos.push(nuevaTarea);
    console.log('Tarea Agregada con exito');
    console.log(verTodos()[verTodos().length -1])
};

let eliminarTodo = (id) => {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1); //eliminaria la posicion coincidente y solo ese elemento
            console.log("Eliminado con exito");
            console.log(verTodos());            
            return;
        } else {
            console.log("El id seleccionado no se encuentra");
        }
    }
};

module.exports = { verTodos, agregarTodo, eliminarTodo };
