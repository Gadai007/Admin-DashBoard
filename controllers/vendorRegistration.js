const { VendorRegistration  } = require('../models/VendorRegistration')

const createVendorRegistration = async (req, res) => {
    const vendorRegistration = await VendorRegistration.create(req.body)
    if(vendorRegistration){
        res.status(200).json(vendorRegistration)
    }else{
        res.status(400).json({ error: 'failed to create vendor registration form'})
    }
}

const getVendorRegistration = async (req, res) => {
    const vendorRegistration  = await VendorRegistration.findAll()
    if(vendorRegistration){
        res.status(200).json(vendorRegistration)
    }else{
        res.status(400).json({ error: 'failed to find the vendor registration'})
    }
}

module.exports = {
    createVendorRegistration,
    getVendorRegistration
}