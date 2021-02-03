const route = require('express').Router()
const { getVendorRequest, createVendorRequest } = require('../controllers/vendorRequest')
const { getUserById } = require('../controllers/user')
const { isAuthenticated, isSignin} =require('../controllers/auth')

route.param('id', getUserById)

route.get('/vendor-request/:id', isSignin, isAuthenticated, getVendorRequest)
route.post('/create/vendor-request/:id', isSignin, isAuthenticated, createVendorRequest)

module.exports = route