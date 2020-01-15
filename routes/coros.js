'use strict'

var express = require('express');
var CorosController = require('../controllers/coros');
var VoicesController = require('../controllers/voices');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './upload' });

router.get('/home', CorosController.home)
router.post('/test', CorosController.test)
router.post('/save-coro', CorosController.saveCoro)
router.get('/coro/:id?', CorosController.getCoro)
router.get('/coros',CorosController.getCoros)
router.put('/coro/:id',CorosController.updateCoro)
router.delete('/coro/:id',CorosController.deleteCoro)
router.post('/upload-coro/:id', multipartMiddleware,CorosController.uploadAudio)
router.get('/get-coro/:coro', CorosController.getCoroFile)

router.post('/upload-tenor/:id', multipartMiddleware,VoicesController.uploadTenor)
router.post('/upload-baritono/:id', multipartMiddleware,VoicesController.uploadBaritono)
router.post('/upload-soprano1/:id', multipartMiddleware,VoicesController.uploadSoprano1)
router.post('/upload-soprano2/:id', multipartMiddleware,VoicesController.uploadSoprano2)
router.post('/upload-contralto/:id', multipartMiddleware,VoicesController.uploadContralto)
router.post('/upload-image/:id', multipartMiddleware,VoicesController.uploadImage)
router.post('/upload-pista/:id', multipartMiddleware,VoicesController.uploadPista)

module.exports = router;