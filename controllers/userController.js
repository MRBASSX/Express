const User = require("../models/userModel");

const createUser = async (req,res)=>{

    const user =  new User(req.body);
    const saved = await user.save();

    if (save) {

        res.redirect("/");
        
    } else {

        res.
        
    }


}

