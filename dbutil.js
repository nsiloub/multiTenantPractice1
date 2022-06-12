let mongoose = require("mongoose")
let dotenv = require("dotenv")
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

let initDbConnection = () => {
    let db = mongoose.createConnection(process.env.MONGODB_URI, clientOption);
    
    db.on("error", (error) => log("Mongodb Connection Error>> : ", error));
    db.once("open", () => log("Client MongoDB connection ok!"));
    
    // mongoose.model("Tenant", tenantSchema);
    require("./models/tenantModel.js")
    return db;
};

module.exports = {
    initDbConnection,
}