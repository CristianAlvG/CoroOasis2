'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CoroSchema = Schema({
	name: String,
    image: String,
    audio: String,
    author: String,
    pista: String,
    lyric:String,
    tenor:String,
    baritono:String,
    soprano1:String,
    soprano2:String,
    contralto:String

});

module.exports = mongoose.model('Coro', CoroSchema);
// projects  --> guarda los documents en la coleccion