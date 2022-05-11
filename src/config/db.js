const mongoose=require("mongoose");
const connectdb=()=>{
    return mongoose.connect("mongodb+srv://Ashish7797:Ashish7797@cluster0.pgk2o.mongodb.net/node?retryWrites=true&w=majority")
}
module.exports=connectdb;