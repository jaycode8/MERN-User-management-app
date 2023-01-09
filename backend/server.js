const express = require('express');
const PORT = 4500;
const bodyPasser = require('body-parser');
const connections = require('./models/connections');
const userRouter = require('./routes/userRoutes');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path')

const app = express();

app.use(bodyPasser.urlencoded({ extended : false}));
app.use(bodyPasser.json());
app.use(cors());
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

//===== creating a session middleware
let oneDay = 1000*60*60*24;
app.use(session({
    secret:'sdgsdryhnfmnhdfdfhdfjh',
    saveUninitialized:true,
    cookie:{maxAge: oneDay},
    resave: false
}));
app.use(cookieParser());

app.use('/', userRouter);

app.listen(PORT, ()=>{
    console.log(`server listening to port ${PORT}`);
});