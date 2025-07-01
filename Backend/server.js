require ('dotenv').config();
const express=require('express');
const connectDB=require('./config/db');

const app=express();
connectDB();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('API competences operationnelle');
j
});

const PORT=process.env.PORT||5000;
app.listen(PORT, ()=> console.log(`serveur  est demare sur le port ${PORT}`)); 