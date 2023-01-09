let session = require('express-session');
const mongoose = require('mongoose');
const userModel = mongoose.model('User');


const addUser = (req,res) =>{
    let user = userModel();
    user.userName = req.body.name;
    user.userMail = req.body.email;
    user.userPassword = req.body.password;
    user.save((err) =>{
        if(!err){
            res.redirect('http://localhost:3000/')
        }
        else{
            res.send(err);
        };
    });
};

const userAuthentication = (req,res) =>{
    const emails= req.body.email;
    const passw = req.body.passw;
    userModel.findOne({"userMail":emails, "userPassword":passw},"userName userMail", (err,user)=>{
        if(err){
            res.send(err)
        }
        else{
            if(!user){
                res.send('user does not exist')
            }
            else{
                session = req.session;
                session.userid = user._id;
                res.redirect(`/${session.userid}`);
            };
        };
    });
};

const home = (req,res) =>{
    const userId = req.params.id;
    userModel.findOne({"_id": userId},"userName userMail userPassword", (err,user)=>{
        if(err){
            res.send(err)
        }
        else{
            res.render('home',{
                userDetails : user
            });
        };
    });
};

const logOut = (req,res) =>{
    req.session.destroy();
    res.redirect('http://localhost:3000/');
};


module.exports = {
    home,
    addUser,
    userAuthentication,
    logOut
};