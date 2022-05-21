const express = require("express");
const Login = require("../src/models/Login");
const router = express.Router();

require("../src/db/Conn");

//USING ASYNC AWAIT//
router.get('/Login' ,async (req,res)=>{
    const {user_name,password} = req.body;
    
    try{
        console.log(user_name);
        const log = await Login.findOne({username : user_name, password : password});
        if(log){
            if(log.user_name == user_name && log.password == password){
                return res.json({message : log });
            }
            else {
                return res.json({message: "incorrect login details"});
            }
        }
        else{
            return res.json({message : "user not found" });
        }
    }
    catch(err){
            res.json({message : err});
            console.log(err);
    }
})
router.post('/login' ,async (req,res)=>{
    const {user_name,password} = req.body;
    if(!user_name || !password){
        return res.status(422).json({error : "Please fill all fields"});
    }

    try{
          const productExist = await Login.findOne({user_name : user_name})
        if(productExist){
            return res.status(422).json({error : productExist});
        }
        const product = new Login({user_name,password});

        const productSaved = await product.save();
       
        res.status(201).json({message : "login deets added successfully"});
        
        
             
    }
    catch(err){
            res.json({message : err});
            console.log(err);
    }
})
module.exports=router;