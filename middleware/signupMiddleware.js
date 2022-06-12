let crypto  = require("crypto");
let sec  = require("../config/security.js");
const tenantSchema = require("../models/tenantModel.js");
;

let log = console.log;

let tenantModel_create_newtenant = async(req, res, next) =>{
    try{
        let { email, password, name } = req.body;
        let salt = crypto.randomBytes(16).toString("hex"); // Create a salt in DB
        let hashedPwd = crypto.scryptSync(password, salt, sec.cryptoKeylen, { N : sec.cryptoIterationCost }).toString("hex");

        // Accessing the Cluster connection from global Object
        let dbConnection = global.clientConnection;
        let db = await dbConnection.useDb(name, {useCache : true}/* USE_WHATEVER_YOU_USE_TO_IDENTIFY_YOUR_TENANT_BUT_MUST_BE_UNIQUE*/);
        let Tenant = await db.model("Tenant", tenantSchema);

        let tenantIsPresent = await Tenant.findOne({ email : email}) // To return an already existing Tenant;
        if(tenantIsPresent) {
            res.status(409).send("This Tenant/company already exist");
            // throw new Error("This Tenant/company already exist");
            log("This Tenant/company already exist");
            return next();
        }
        let newTenant = await new Tenant({
            name : name,
            email : email,
            password : hashedPwd,
        }).save()

        res.status(201).send({message : "Created succesfully", newTenant});

    }catch(err){
        log("error while saving", err)
        res.status(500).send({message : "error while saving", err : err.message});
        next()
    }
};

module.exports = {
    tenantModel_create_newtenant
}