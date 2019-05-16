const express=require('express');
const axios=require('axios');
const config=require('../../config/config');


const router=express.Router();

router.get('/',(req,res)=>{


    axios.get(config.API,{headers:{
        [config.API_KEY_HEADER]:[config.API_KEY_VALUE]
    }})
    .then(coins=>{
        console.log(coins.data);
        return res.send(coins.data);
    })
    .catch(err=>console.log(err));

});


module.exports=router;