import { Schema, model } from "mongoose"


const userSchema = new Schema({
  name:String,
  age:String,
  gender:String  
})

 res.redirect("/");
export default model("User",userSchema)