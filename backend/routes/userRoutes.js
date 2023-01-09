const express = require('express');
const router = express.Router();

const {
    home,
    addUser,
    userAuthentication,
    logOut
} = require('./Controllers/userControlers');

router.post('/authUser', userAuthentication);

router.get('/:id', home);

router.post('/addUser', addUser);

router.get('/logout/:id', logOut);

module.exports = router;