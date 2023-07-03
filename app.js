const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.set("strictQuery" , false);
const express = require('express');
const app = express();
dotenv.config({path : './config.env'});
require('./db/conn'); 
app.use(express.json());
const user = require('./models/UserSchema');
app.use(require('./Router/Auoth'))
const port = process.env.port;

// app.get('/',(req,res)=>
// {
//     res.send('starting with server');
// });

app.get('/contact', (req , res)=>
{
    res.send('about page');
});
app.get('/about', (req, res)=>
{
    res.send('signup form');
});
app.listen(port,()=>
{
    console.log(`project running on port ${port}`);
})