const mongoose = require("mongoose")


const authModelSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String

});



module.exports = mongoose.model("AuthModel",authModelSchema)