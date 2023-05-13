const express = require('express');
const router = express.Router();
const createStudent = require('../controllers/studentCtrl');
router.get('/signup', createStudent);