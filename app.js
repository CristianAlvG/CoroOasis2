'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// cargar archivos rutas
var corosRoutes = require('./routes/coros');

// middlewares




app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas
app.use('/',express.static('client',{redirect:false}));
app.use('/api', corosRoutes);

app.get('*', function(req,res,next){
    res.sendFile(path.resolve('client/index.html'));
})


// exportar
module.exports = app;

