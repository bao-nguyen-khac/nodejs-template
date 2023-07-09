const express = require('express');
const route = express.Router();
const userController = require('../controllers/user.controller');

route.get('/', userController.getAll);
route.post('/', userController.new);
// route.get('/:id', userController.get);
// route.put("/user/:id");
// route.delete("/user/:id");

module.exports = route;
