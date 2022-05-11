const { request } = require("express");
const express = require("express");
const Product = require("../src/models/Schema");
const router = express.Router();

require("../src/db/Conn");

//USING ASYNC AWAIT//
router.delete('/Delete/:product_name' ,async (req,res)=>{
    try{
          const products = await Product.deleteOne( { product_name: req.params.product_name } );
          if (products.deletedCount === 1) {
      console.log("Successfully deleted one document.");
       msg = "Successfully deleted one document.";
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
       msg = "No documents matched the query. Deleted 0 documents.";
            
    }
    return res.json({message : msg});
}
    catch(err){
            return res.json({message : err});
            console.log(err);
    }
})

    
module.exports=router;