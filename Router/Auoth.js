const express = require('express');
const Router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('../db/conn');
const user = require('../models/UserSchema');

Router.get('/', (req, res) => {
    res.send('starting with server');
});
Router.get('/contact', (req, res) => {
    res.send('about page');
});
Router.get('/about', (req, res) => {
    res.send('signup form');
});

Router.post('/register', (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: 'please fill all the field properly' })
    }
    user.findOne({ email: email })
        .then((userexist) => {
            if (userexist) {
                return res.status(422).json({ error: 'email already exist' })
            }
            const User = new user({ name, email, phone, work, password, cpassword });
            User.save().then(() => {
                res.status(201).json({ message: 'registered successfully' })
            }).catch((error) => {
                res.status(500).json({ error: 'failed regestration' });
            })
        }).catch(err => {
            console.log(err);
        })
});

Router.post('/signin', async (req, res) => {
    res.cookie("token" , "asad")
    // console.log(req.body);
    // res.json({message : 'awesome'})
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "plz fill the field properly" })
        }
        const userLogin = await user.findOne({ email: email })
        if (userLogin) {
            const ismatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            res.cookie("jwtoken" , token , {
                expires : new Date(Date.now() + 300000),
                httpOnly : true
            })
            if (!ismatch) {
                res.status(422).json({
                    error: "invalid "
                })
            } else {
                res.json({ message: "signin succsessfully" })
            }
        } else {
            res.status(400).json({ error: " invalid " })
        }
    } catch (error) {
        console.log(error);
    }

    // try{
    //        const {email , password } = req.body;
    //        if(!email || !password){
    //         return res.status(400).json({error: "plesae fill the data"});
    //        }
    //         const userLogin = user.findOne({email : email});
    //         console.log(userLogin);
    // }catch(err){
    //      console.log(err)
    // }
})


module.exports = Router;