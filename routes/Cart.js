const express = require("express")
const Router = express.Router();
const Cart = require("../models/Cart");



// Read All
Router.get('/cart', async (req,res)=>{

    const Cart = await Cart.find()
    res.render("about",{Cart:Cart})

});

// Read Single Record

Router.get("/cart:id",async (req,res,next)=>{

    const Cart = await Cart.findById(req.params.id);
    res.render("about", { Cart:Cart })


})


// Save Data

Router.post("/cart", async (req,res,next)=>{

    const Cart = await new Cart(req.body);
    const save = Cart.save();
    res.redirect('/');

})


// Update Data 
Router.put("/cart:id", async (req,res,next)=>{

    const Cart = await Cart.findByIdAndUpdate(req.params.id,req.body,{new:true});
    const save = Cart.save();
    res.redirect("/")

})


// Delete Data 

Router.delete("/cart:id", async (req,res,next)=>{

const Cart = await Cart.findByIdAndDelete(req.params.id)
const saved =  Cart.save()


})