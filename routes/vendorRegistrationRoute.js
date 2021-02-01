const route = require('express').Router()

const { createVendorRegistration, getVendorRegistration } = require('../controllers/vendorRegistration')

route.get('/vendor-registration', getVendorRegistration)
route.post('/create/vendor-registration', createVendorRegistration)

module.exports = route
