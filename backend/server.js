const express = require('express')
const app = express()

import productos from './productos.json';

app.get('/productos', function (req, res) {
    console.log(productos)
    res.send('Hello World')
})

app.post('/productos/filtro', function (req, res) {
    res.send('Hello World')
})


app.listen(5000)