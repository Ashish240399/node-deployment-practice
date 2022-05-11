const connectdb=require("./config/db");
const app=require("./index");
const port=process.env.PORT || 5000
app.listen(port,async()=>{
    try {
        await connectdb();
    } catch (error) {
        console.log(error)
    }
    console.log(`${port}`);
})