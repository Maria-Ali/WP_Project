const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT ||3000;
const static_path = path.join(__dirname , "../public");

require("./db/conn");
const Product = require("./models/Schema");
app.use(express.json());
app.listen(port , ()=>{
    console.log(`Server is listening at ${port}`);
})