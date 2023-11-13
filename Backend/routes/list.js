var express = require('express');
var Router = express.Router();
var listController = require('../controller/listController')

Router.get('/getlist',listController.listData)

module.exports = Router;