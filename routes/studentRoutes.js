const express = require('express');
const router = express.Router();

const studentCtrl = require('../controllers/studentCtrl');
const auth = require('../middleware/auth');
const studentRoleAuth = require('../middleware/roleBasedAuth');
router.put('/updateProfile/:id', auth.getStudent, studentRoleAuth.requireStudentRole, studentCtrl.updateProfile);
router.delete('/deleteProfile/:id', auth.getStudent, studentRoleAuth.requireStudentRole, studentCtrl.deleteProfile);
router.post('/signup',studentCtrl.createStudent);
router.post('/login', studentCtrl.login );
module.exports = router;