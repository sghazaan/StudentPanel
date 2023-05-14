const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const studentCtrl = require('../controllers/studentCtrl');
const auth = require('../middleware/auth');
router.put('/updateProfile/:id', auth.getStudent, studentCtrl.updateProfile);
router.delete('/deleteProfile/:id', auth.getStudent, studentCtrl.deleteProfile);
router.post('/signup',studentCtrl.createStudent);
router.post(
    '/login',
    [
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Password is required').exists(),
    ],
    studentCtrl.login
  );




  //other routes include browsing of courses, viewing of courses,
// viewing of course details, viewing of course videos, viewing of course assignments,
// viewing of course quizzes,
module.exports = router;