const express = require("express");
const Product = require("../src/models/Schema");
const router = express.Router();

require("../src/db/Conn");


router.get('/' , (req,res)=>{
    res.send("hello from create.js");
});

router.post('/createProduct' ,(req,res)=>{
    const {product_name , category , price , quantity , expirydate , supplier_emailid}=req.body;
    if(!product_name || !category || !price || !quantity || !expirydate|| !supplier_emailid){
        return res.status(422).json({error : "Please fill all fields"});
    }

    Product.findOne({product_name : product_name})
    .then((productExist)=>{
        if(productExist){
            return res.status(422).json({error : "Already exists"});
        }
        const product = new Product({product_name,category,price,quantity,expirydate, supplier_emailid
        });
        product.save().then(()=>{
             res.status(201).json({message : "product added successfully"});
        }).catch((error)=> res.status(500).json({error : error}));
    }).catch(err=>{
        console.log(err);
    });
    //console.log(product_name);
    //console.log(category);
   // res.send("data printed");
  // res.json({message : req.body});
});
module.exports=router;