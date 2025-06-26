const  mongoose = require("mongoose");
const User = require("./User")


const cartSchema = mongoose.Schema({
    quantity:String,
    user:User
});


module.exports = mongoose.model("Cart",cartSchema,{});