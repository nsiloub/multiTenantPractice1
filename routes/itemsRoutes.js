let express = require("express");
const { itemsModel_create_newItem } = require("../middleware/itemsMiddleware.js");

let itemsRouter = express.Router();

itemsRouter.post("/items", itemsModel_create_newItem);

module.exports = itemsRouter;