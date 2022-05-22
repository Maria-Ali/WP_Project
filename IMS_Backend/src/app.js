const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT ||3000;
//const static_path = path.join(__dirname , "../public");

//require("./db/conn");

app.use(express.json());
app.use(express.urlencoded({extended : false}));
const Product = require("./models/Schema");
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(require("../router/Create"));
app.use(require("../router/Update"));
app.use(require("../router/GetAllDocuments"));
app.use(require("../router/Search"));
app.use(require("../router/Login"));
app.use(require("../router/Delete"));
app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(port , ()=>{
    console.log(`Server is listening at ${port}`);
});