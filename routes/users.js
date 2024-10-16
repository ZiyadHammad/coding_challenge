const express = require('express');
const { fetchUsers, createUser } = require('../controllers/users.js');

const router = express.Router()

 // GET
router.get('/users', fetchUsers)

// POST
router.post('/users', createUser)

module.exports = router