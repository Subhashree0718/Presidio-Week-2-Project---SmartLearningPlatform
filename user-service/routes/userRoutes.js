const express = require('express');
const router = express.Router();
const { loginJWT, loginSession, profile, signin, getAllUsers } = require('../controllers/userController');
const sessionAuth = require('../middleware/sessionAuth');
const authLimiter = require('../middleware/rateLimiter');
const { authenticateJWT, authorizeRoles } = require('../middleware/auth'); 
router.post('/login-jwt', authLimiter, loginJWT);
router.post('/login-session', authLimiter, loginSession);
router.post('/signin', authLimiter, signin);
router.get('/profile', sessionAuth, profile);
router.get('/all-users', authenticateJWT, authorizeRoles('admin'), getAllUsers);

module.exports = router;

/* "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InRlYWNoZXIiLCJpYXQiOjE3NTkwMzgyMDEsImV4cCI6MTc1OTA0MTgwMX0.LtAudGiC7H6a29qf6YMZFTlZ81pWb8rKDXBpkjWMedo"*/
// admin: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzU5MDQzOTExLCJleHAiOjE3NTkwNDc1MTF9.mOZCh7xxF4FMY4uWPnO6Pch-yGWFpANvvJR-CJX6X_0
