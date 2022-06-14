import express from 'express';
import authRoute from './authRoute.js';
import itemsRouter from './itemsRoutes.js';

let rootRoute = express.Router();

rootRoute.use("/", authRoute, itemsRouter)

export default rootRoute;