const { VendorRequest } = require('../models/VendorRequest')
const formidable = require('formidable')
const path = require('path')
const fs = require('fs')

const createVendorRequest = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true

    form.parse(req, async (err, fields, files) => {
        if(err){
          return res.status(400).json({ error: 'problem with files'})
        }

        Object.values(files).every(file => {
            if(file.size > 3000000){
               return res.status(400).json({ error: 'file size too large'})
            }
        })

        const vendorRequest = await VendorRequest.create(fields)

        Object.entries(files).map(file => {
            vendorRequest[file[0]] = file[1].path
            // vendorRequest[file[0]] = file[1]
            // let oldPath = file[1].path
            // let newPath = path.join(__dirname, '/uploads/' + file[1].name)
            // let rawData = fs.readFileSync(oldPath)
            // fs.writeFile(newPath, rawData, function(err){ 
            //     if(err) console.log(err) 
            // }) 
        })
        await vendorRequest.save()
        res.status(200).json(vendorRequest)
    })
}

const getVendorRequest = async (req, res) => {
    const vendorRequests = await VendorRequest.findAll()
    if(vendorRequests){
        res.status(200).json(vendorRequests)
    }else{
        res.status(400).json({ error: 'no vendor requests found in db '})
    }
}

module.exports = { createVendorRequest, getVendorRequest }