const route = require('express').Router()
const { isSignin, isAuthenticated } = require('../controllers/auth')
const { getUserById, getUser} = require('../controllers/user')

route.param('id', getUserById)

route.get('/user/:id', isSignin, isAuthenticated, getUser)

module.exports = route