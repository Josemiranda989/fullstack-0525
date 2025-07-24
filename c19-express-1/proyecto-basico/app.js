const express = require('express');
const app = express();
const path = require('path')

app.get('/', (req, res) => {
   res.send('¡Hola mundo!');
});

app.get('/test', (req, res) => {
   res.sendFile(path.join(__dirname, 'helloworld.html'));
});

app.get('/contact', (req, res) => {
   res.send('Podes contactarte al .....');
});

app.get('/helloworld', (req, res) => {
   res.send('¡Hola mundo!');
   
});

app.listen(3000, () =>
   console.log('Servidor corriendo en http://localhost:3000')
);
