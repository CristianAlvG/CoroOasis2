'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 7500;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/coros')
        .then(() => {
        	console.log("Conexión a la base de datos establecida satisfactoriamente...");

        	// Creacion del servidor
        	app.listen(port, () => {
        		console.log("Servidor corriendo correctamente en la url: localhost:7500");
        	});

        })
        .catch(err => console.log(err));