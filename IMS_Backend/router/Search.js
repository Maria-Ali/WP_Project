const express = require("express");
const Product = require("../src/models/Schema");
const router = express.Router();

require("../src/db/Conn");

//USING ASYNC AWAIT//
router.get('/searchProduct/:search_name' ,async (req,res)=>{

    try{
        // const query = {product_name : req.params.search_name};
        console.log(req.params.search_name)
      const search = await Product.findOne({product_name : req.params.search_name});
      console.log(JSON.stringify(search));
      return res.json({message : search });
    }
    catch(err){
      res.json({message : err});
      console.log(err);
    }
})

    
module.exports=router;