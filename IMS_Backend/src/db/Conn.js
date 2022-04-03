const mongoose  = require("mongoose");
//mongodb://localhost:27017/Inventory
mongoose.connect("mongodb://127.0.0.1:27017/Inventory",{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log(`Connection successful`);
}).catch((e)=>{
    console.log(`no connection ` +e);
});