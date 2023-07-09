const express = require('express');
const postController = require('../controllers/post.controller');
const route = express.Router();

route.post('/', postController.new);
route.get('/', postController.getAll);

module.exports = route;
