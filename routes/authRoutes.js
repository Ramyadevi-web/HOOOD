const express = require('express');
const router = express.Router();

const {getUsers, getUserById, createUser, deleteUser,getUserInfo, updateUser, loginUser} = require('../controller/authController.js');
const authMiddleware = require('../middleware/authMiddleware.js')


router.get('/user',authMiddleware, getUserInfo);
router.get('/:id',getUserById);
router.post('/register',createUser);
router.post('/login', loginUser);
router.delete('/:id',deleteUser);
router.put('/:id',updateUser)

module.exports = router;