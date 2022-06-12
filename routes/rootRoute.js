let express = require("express");
let authRoute = require("./authRoute.js");
const itemsRouter = require("./itemsRoutes.js");

let rootRoute = express.Router();

rootRoute.use("/", authRoute, itemsRouter)

module.exports = rootRoute;