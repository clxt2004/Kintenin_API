const jsonWebToken = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User } = require('../DB/sequelize')

const login = (req, res)=>{
     return res.json({message:"ok"})
}


module.exports = {login}