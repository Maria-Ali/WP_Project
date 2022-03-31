const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const InventorySchema = new Schema({
    product_name:{
        type :String,
        required : true,
        unique : true,
        minlength : 50
    },
    category:{
        type :String,
        required : true,
        unique : false,
        minlength : 30
    },
    price:{
        type :Number,
        required : true,
        unique : false,
    },
    quantity:{
        type :Number,
        required : true,
        unique : false,
    },
    expirydate:{
        type :Date,
        required : true,
        unique : false,
    },
    supplier_emailid:{
        type :String,
        required : false,
        unique : false,
    },

},{timestamps:true});

const Product = mongoose.model("Product" , InventorySchema);
module.exports = Product;