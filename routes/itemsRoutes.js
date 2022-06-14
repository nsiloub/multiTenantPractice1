import express from 'express';
import { itemsModel_create_newItem } from '../middleware/itemsMiddleware.js';

let itemsRouter = express.Router();

itemsRouter.post("/items", itemsModel_create_newItem);

export default itemsRouter;