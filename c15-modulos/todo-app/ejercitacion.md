# 📝 Ejercicio: Gestor de Tareas (To-Do List)

## 🎯 Objetivo
Crear una app de consola en Node.js que permita **ver**, **agregar** y **eliminar tareas** desde un menú interactivo.

## 🧠 Temas a aplicar
- Variables y tipos de datos
- Estructuras de control (`if`, `else`)
- Bucles (`for`, `for...of`)
- Funciones
- Módulos (`require` / `module.exports`)
- `prompt-sync` para entrada por consola

## Estructura recomendada
```
src
    - data
    - utils
    - app.js
```



## 📌 Requisitos
- Las tareas tienen formato: `{ id: 1, titulo: "Texto de tarea" }`
- Menú con opciones:
  1. Ver tareas
  2. Agregar tarea
  3. Eliminar tarea
- Al agregar tareas usar `Date.now()` como ID
- Validar opciones incorrectas en el condicional