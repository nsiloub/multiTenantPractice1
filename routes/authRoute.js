let express = require("express");
let { tenantModel_create_newtenant } = require("../middleware/signupMiddleware.js");

let authRoute = express.Router();
let signupRoute = express.Router();

signupRoute.post("/signup", tenantModel_create_newtenant);

authRoute.use("/auth", signupRoute)

module.exports = authRoute