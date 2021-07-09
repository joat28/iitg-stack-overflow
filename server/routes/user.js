const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

//GET ALL USERS
router.get('/', userController.getAllUsers)

//GET A SINGLE USER
router.get('/:user_id', userController.getUser)

module.exports = router;


