const route = require('express').Router()

const { check } = require('express-validator')

const { signup, signin, signout } = require('../controllers/auth')

route.post('/signup', [
    check('name', 'name should be atleast 3 character').isLength({ min: 3}),
    check('email',  'enter a valid email').isEmail(),
    check('password', 'password should be atleast 3 characters').isLength({ min: 3 })
], signup)

route.post('/signin', [
    check('email', 'enter a valid email').isEmail(),
    check('password', 'password should be atleast 3 characters').isLength({ min: 3 })
], signin)

route.get('/signout', signout)

module.exports = route