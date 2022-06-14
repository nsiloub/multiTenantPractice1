import express from 'express';
import { tenantModel_create_newtenant } from '../middleware/signupMiddleware.js';

let authRoute = express.Router();
let signupRoute = express.Router();

signupRoute.post("/signup", tenantModel_create_newtenant);

authRoute.use("/auth", signupRoute)

export default authRoute;