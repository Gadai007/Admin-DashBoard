const { User } = require('../models/User')

const getUserById = async (req, res, next, id) => {
    const user = await User.findOne({ where: { id }})
    if(user){
        req.profile = user
        next()
    }else{
        res.status(400).json({ error: 'user not found'})
    }
}

const getUser = async (req, res) => {
    req.profile.password = undefined
    req.profile.createdAt = undefined
    req.profile.updatedAt = undefined
    res.status(200).json(req.profile)
}

module.exports = {
    getUserById,
    getUser
}