import itemsSchema from '../models/itemsModel.js';
let log = console.log;

export let itemsModel_create_newItem = async(req, res, next) =>{
    try{
        let { item_name, number_of_items } = req.body;
        let dbConnection = global.clientConnection;
        let name = "Tenant2"; // The namle can dynamically be sent with tokens,... But just for testing i use the a name
        let db = await dbConnection.useDb(name, { useCache : true});
        let Tenant = db.model("item", itemsSchema);

        let newItem = await Tenant.create({
            item_name : item_name, 
            number_of_items : number_of_items
        });
        res.status(201).send({message : "new item created Succesfully!", newItem});
        log({message : "new item created Succesfully!", newItem});
    } catch(err){
        log(err);
        res.status(500).send({message : "error while creating the item", err: err.message});
        next()
    }
};
