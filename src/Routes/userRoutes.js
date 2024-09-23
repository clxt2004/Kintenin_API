const express = require('express')
const router = express.Router()
const controllers = require('../controllers/userController')

router.get('/login', controllers.login)

module.exports = router