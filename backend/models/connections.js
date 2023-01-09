const mongoose = require('mongoose');
const User = require('./users.model');
const dotenv = require('dotenv');
dotenv.config()

// URL = 'mongodb://localhost:27017/Users';
URL = process.env.URL

mongoose.connect(URL, {useNewUrlParser: true}, (err) =>{
    if(!err){
        console.log('Mongo db connections successfull');
    }
    else{
        console.log(err);
    };
});