const express = require('express');
const { createUser, loginUser, getAllUsers } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/daftar', createUser); // Mengubah endpoint menjadi POST `/api/users`
router.post('/login', loginUser);
router.get('/', authMiddleware, getAllUsers);

module.exports = router;
