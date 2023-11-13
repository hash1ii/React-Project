var express = require('express');
var Router = express.Router();
var frmController = require('../controller/frmcontroller');

Router.post('/create', frmController.frmData)
Router.get('/list', frmController.getList)
Router.put('/update/:id', frmController.editList)
Router.delete('/delete/:id', frmController.deleteList)

module.exports = Router;