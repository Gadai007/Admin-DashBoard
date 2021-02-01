const { getVendorRequest, createVendorRequest } = require('../controllers/vendorRequest')

const route = require('express').Router()

route.get('/vendor-request', getVendorRequest)
route.post('/create/vendor-request', createVendorRequest)

module.exports = route