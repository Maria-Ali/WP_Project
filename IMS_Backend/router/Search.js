const express = require("express");
const Product = require("../src/models/Schema");
const router = express.Router();

require("../src/db/Conn");

//USING ASYNC AWAIT//
router.get('/searchProduct/:search_name' ,async (req,res)=>{

    try{
          
        // const query = {product_name : req.params.search_name};
          const update = await Product.findOne({product_name : req.params.search_name});

            return res.json({message : update });
    }
    catch(err){
            res.json({message : err});
            console.log(err);
    }
})

    
module.exports=router;