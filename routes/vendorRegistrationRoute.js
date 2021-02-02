const route = require('express').Router()
const { createVendorRegistration, getVendorRegistration } = require('../controllers/vendorRegistration')
const {getUserById } = require('../controllers/user')
const { isSignin, isAuthenticated} = require('../controllers/auth')

route.param('id', getUserById)

route.get('/vendor-registration/:id', isSignin, isAuthenticated, getVendorRegistration)
route.post('/create/vendor-registration/:id', isSignin, isAuthenticated, createVendorRegistration)

module.exports = route
