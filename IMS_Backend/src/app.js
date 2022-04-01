const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT ||3000;
//const static_path = path.join(__dirname , "../public");

//require("./db/conn");

app.use(express.json());

const Product = require("./models/Schema");

app.use(require("../router/Create"));

app.listen(port , ()=>{
    console.log(`Server is listening at ${port}`);
});