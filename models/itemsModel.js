let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let itemsSchema = new Schema({
    item_name : {
        type : String,
    },
    number_of_items : {
        type : Number
    }
},
{
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});

module.exports = itemsSchema;