const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    return res.send("Welcome to CryptoWex Platform backend!");
});

const cryptocurrencies=require('./api/routes/cryptocurrencies');

app.use('/cryptocurrencies',cryptocurrencies);


const PORT= process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});