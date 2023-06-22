const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller");

route.get("/get-all", userController.getAll);
route.get("/:id", userController.get);
// route.post("/user");
// route.put("/user/:id");
// route.delete("/user/:id");

module.exports = route;
