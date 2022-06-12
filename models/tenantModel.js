let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let tenantSchema = new Schema({
    name: {
        type: String,
        unique: [true, "This name already exist, please try another one"],
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase : true
    },
    salt : {
        type : String,
    },
    password: {
        type: String,
        trim: true,
        minlength : 6

    },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
module.exports = tenantSchema;
