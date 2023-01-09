const mongoose = require('mongoose');

let usersSchema = mongoose.Schema({
    userName:{
        type : String
    },
    userMail:{
        type : String
    },
    userPassword:{
        type : String
    }
});

mongoose.model('User',usersSchema);