const express = require("express");

const standarRoutes = require("./generate.route");

const route = express.Router();

route.use("/generate", standarRoutes);
module.exports = route;
