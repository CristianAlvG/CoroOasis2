'use strict'


var Coro = require('../models/coro')
var fs = require('fs'); //libreria para borrar el archivo de img
var path = require('path')


var controller = {
    home: function(req, res){
        return res.status(200).send({
           message: 'Soy la home'
        });
    },

    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el metodo o acción test del controlador del projecto'
        });
    },


    saveCoro: function(req, res){
     var coro = new Coro();




     var params = req.body; 

     coro.name = params.name;
     coro.image = null;
     coro.audio = null;
     coro.author = params.author;
     coro.pista = null;
     coro.image = null;
     coro.lyric = params.lyric;
     coro.tenor = null;
     coro.baritono = null;
     coro.soprano1 = null;
     coro.soprano2 = null;
     coro.contralto = null;

     

     coro.save((error, coroStored) =>{
        if(error) return res.status(500).send({message:"Error al guardar el documento"})

        if(!coroStored) return res.status(404).send({message:"No se ha podido guardar el projecto"})

        return res.status(200).send({coro: coroStored})


     });
    },

    getCoro: function(req, res){
        var coroId = req.params.id;



        if(coroId == null) return res.status(404).send({message:"el documento o proyecto no existe"});

        Coro.findById(coroId, (err, coro)=>{
            if(err) return res.status(500).send({message:"error al devolver los datos"})
            if(!coro) return res.status(404).send({message:"el documento o proyecto no existe"})

            return res.status(200).send({
                coro
            })
        } )
    },




    getCoros: function(req, res){

        Coro.find({/*year 2019*/}).sort().exec((err, coro) =>{
            if(err) return res.status(500).send({message:"error al devolver los datos"})
            if(!coro) return res.status(404).send({message:"no hay proyectos para mostrar"})

            return res.status(200).send({coro});
        })
    },




    updateCoro:function(req,res){
        var coroId = req.params.id
        var update = req.body

        Coro.findByIdAndUpdate(coroId, update, {new:true}, (err, coroUpdated)=>{
            if(err) return res.status(500).send({message:"error al actualizar"})
            if(!coroUpdated) return res.status(404).send({menssage:"No existe el projecto para actualizar"})

            return res.status(200).send({
                coro: coroUpdated
            })
        });
    },

    deleteCoro: function(req, res){
		var coroId = req.params.id;

		Coro.findByIdAndRemove(coroId, (err, coroRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});

			if(!coroRemoved) return res.status(404).send({message: "No se puede eliminar ese proyecto."});

			return res.status(200).send({
				coro: coroRemoved
			});
		});
	},


    uploadAudio: function(req,res){
        var coroId = req.params.id

        var fileName = "Coro no subido..."

        if(req.files){
           
            var filePath = req.files.audio.path;
            var fileSplit = filePath.split('/');
            var fileName = fileSplit[1];

            var extSplit = fileName.split('\.')

            var fileExt = extSplit[1];

            

                Coro.findByIdAndUpdate(coroId, {audio: fileName}, {new: true},(err, coroUpdated)=>{

                    if(err) return res.status(500).send({message:"El archivo no se ha subido"})
                    if(!coroUpdated) return res.status(404).send({message:"La imagen no existe o proyecto no existe"})
    
                    return res.status(200).send({
                        coro: coroUpdated
                    })

                    })

                
            
            
          




            //res.status(200).send({files:req.files})
        }else{
            res.status(500).send({
                message:fileName
            })
        }
    },

    getCoroFile: function(req, res){
        var file = req.params.coro;
        
        var path_file = './upload/'+file;

        fs.exists(path_file, (exists) =>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    message:"No existe la imagen",
                    message: file
                    
                })
            }
        });
    }



};
module.exports = controller; // se importa con un require