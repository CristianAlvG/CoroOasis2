

var Coro = require('../models/coro')
var fs = require('fs'); //libreria para borrar el archivo de img
var path = require('path')





var voices = { 



 uploadTenor: function(req,res){
    var coroId = req.params.id

    var fileName = "Coro no subido..."

    if(req.files){
       
        var filePath = req.files.tenor.path;
        var fileSplit = filePath.split('/');
        var fileName = fileSplit[1];

        var extSplit = fileName.split('\.')

        var fileExt = extSplit[1];

        

            Coro.findByIdAndUpdate(coroId, {tenor: fileName}, {new: true},(err, coroUpdated)=>{

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

uploadBaritono: function(req,res){
    var coroId = req.params.id

    var fileName = "Coro no subido..."

    if(req.files){
       
        var filePath = req.files.baritono.path;
        var fileSplit = filePath.split('/');
        var fileName = fileSplit[1];

        var extSplit = fileName.split('\.')

        var fileExt = extSplit[1];

        

            Coro.findByIdAndUpdate(coroId, {baritono: fileName}, {new: true},(err, coroUpdated)=>{

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

uploadSoprano1: function(req,res){
    var coroId = req.params.id

    var fileName = "Coro no subido..."

    if(req.files){
       
        var filePath = req.files.soprano1.path;
        var fileSplit = filePath.split('/');
        var fileName = fileSplit[1];

        var extSplit = fileName.split('\.')

        var fileExt = extSplit[1];

        

            Coro.findByIdAndUpdate(coroId, {soprano1: fileName}, {new: true},(err, coroUpdated)=>{

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


uploadSoprano2: function(req,res){
    var coroId = req.params.id

    var fileName = "Coro no subido..."

    if(req.files){
       
        var filePath = req.files.soprano2.path;
        var fileSplit = filePath.split('/');
        var fileName = fileSplit[1];

        var extSplit = fileName.split('\.')

        var fileExt = extSplit[1];

        

            Coro.findByIdAndUpdate(coroId, {soprano2: fileName}, {new: true},(err, coroUpdated)=>{

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


uploadContralto: function(req,res){
    var coroId = req.params.id

    var fileName = "Coro no subido..."

    if(req.files){
       
        var filePath = req.files.contralto.path;
        var fileSplit = filePath.split('/');
        var fileName = fileSplit[1];

        var extSplit = fileName.split('\.')

        var fileExt = extSplit[1];

        

            Coro.findByIdAndUpdate(coroId, {contralto: fileName}, {new: true},(err, coroUpdated)=>{

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


uploadPista: function(req,res){
    var coroId = req.params.id

    var fileName = "Coro no subido..."

    if(req.files){
       
        var filePath = req.files.pista.path;
        var fileSplit = filePath.split('/');
        var fileName = fileSplit[1];

        var extSplit = fileName.split('\.')

        var fileExt = extSplit[1];

        

            Coro.findByIdAndUpdate(coroId, {pista: fileName}, {new: true},(err, coroUpdated)=>{

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

uploadImage: function(req,res){
    var coroId = req.params.id

    var fileName = "Coro no subido..."

    if(req.files){
       
        var filePath = req.files.image.path;
        var fileSplit = filePath.split('/');
        var fileName = fileSplit[1];

        var extSplit = fileName.split('\.')

        var fileExt = extSplit[1];

        

            Coro.findByIdAndUpdate(coroId, {image: fileName}, {new: true},(err, coroUpdated)=>{

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
 






}










module.exports = voices;