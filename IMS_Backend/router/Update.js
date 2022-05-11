const express = require("express");
const Product = require("../src/models/Schema");
const router = express.Router();

require("../src/db/Conn");

//USING ASYNC AWAIT//
router.put('/updateProduct/:old_product_name' ,async (req,res)=>{
    const {product_name , category , price , quantity , expirydate , supplier_emailid}=req.body;
    const updated_product = {product_name : product_name,
                            category : category,
                            price : price,
                            quantity : quantity,
                            expirydate : expirydate,
                            supplier_emailid: supplier_emailid};
    if(!product_name || !category || !price || !quantity || !expirydate|| !supplier_emailid){
        return res.status(422).json({error : "Please fill all fields"});
    }

    try{
          
        const query = {product_name : req.params.old_product_name};
          const update = await Product.updateOne(query , updated_product);
            return res.status(201).json({message : "updated successfully"});
    }
    catch(err){
            return res.status(422).json({message : err});
            console.log(err);
    }
})

    
module.exports=router;