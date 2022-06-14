import mongoose from 'mongoose';
import dotenv from 'dotenv';
import tenantSchema from './models/tenantModel.js';
dotenv.config();

let log = console.log;

let clientOption = {
    wtimeoutMS : 30000,
    // reconnectTries : 30000,
    maxPoolSize : 50,
    keepAlive : true,
    useNewUrlParser : true,
    autoIndex : false
};

export let initDbConnection = () => {
    let db = mongoose.createConnection(process.env.MONGODB_URI, clientOption);
    
    db.on("error", (error) => log("Mongodb Connection Error>> : ", error));
    db.once("open", () => log("Client MongoDB connection ok!"));
    
    // require("./models/tenantModel.js");

    tenantSchema;
    return db;
};