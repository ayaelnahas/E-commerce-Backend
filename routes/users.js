const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const User = require('./../models/users');
const authenticationMiddleware = require('../middlewares/authentication');

// base route /users

// registration
router.post('/', async (req, res, next) => {
    const user = new User(req.body);
    await user.save(err =>{
        if (err) return next(createError(404, err));;
    });
    res.send(user);
});


// login
router.post('/authenticate', async (req, res, next) => {

    const { username, password } = req.body;
    if (!username || !password) return next(createError(401));
    const user = await User.findOne({ username: username });
    if (!user) return next(createError(401));
    const isMatch = await user.verifyPassword(password);
    if (!isMatch) return next(createError(401));
    const token = await user.generateToken();
    res.send({ token, id: user._id });
});



router.use(authenticationMiddleware);

router.get('/profile', (req, res) => {
    res.send(req.user);
});

module.exports = router;