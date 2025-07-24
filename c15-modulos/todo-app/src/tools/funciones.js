const fs = require('fs')
const path = require('path')

// const todos = require("../data/todos.js");
const todosPath = path.join(__dirname, '../data/todos.json')
const todosJSON = fs.readFileSync(todosPath, 'utf-8')
// console.log(typeof todosJSON);
const todos = JSON.parse(todosJSON)
// console.log(typeof todos);


// Esta debe mostrar la lista de todos
function verTodos() {
    return todos;
}

let agregarTodo = function (tarea) {
    const nuevaTarea = {
        // id: Date.now(),
        id: todos[todos.length -1]?.id + 1 || 1,
        titulo: tarea,
    };
    todos.push(nuevaTarea);

    // Previo a escribir volver a convertir a json
    let todosJSON = JSON.stringify(todos, null, 2)
    // Escribir el json
    fs.writeFileSync(todosPath, todosJSON)
    console.log('Tarea Agregada con exito');
    console.log(verTodos()[verTodos().length -1])
};

let eliminarTodo = (id) => {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1); //eliminaria la posicion coincidente y solo ese elemento
            
             let todosJSON = JSON.stringify(todos, null, 2)
             fs.writeFileSync(todosPath, todosJSON)
            
            console.log("Eliminado con exito");
            console.log(verTodos());            
            return;
        } else {
            console.log("El id seleccionado no se encuentra");
        }
    }
};

module.exports = { verTodos, agregarTodo, eliminarTodo };
