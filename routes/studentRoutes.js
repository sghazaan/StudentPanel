const express = require('express');
const router = express.Router();

const studentCtrl = require('../controllers/studentCtrl');
const otherCtrl = require('../controllers/otherOperationsCtrl');
const auth = require('../middleware/auth');
const studentRoleAuth = require('../middleware/roleBasedAuth');
router.put('/updateProfile/:id', auth.getStudent, studentRoleAuth.requireStudentRole, studentCtrl.updateProfile);
router.delete('/deleteProfile/:id', auth.getStudent, studentRoleAuth.requireStudentRole, studentCtrl.deleteProfile);
router.post('/signup',studentCtrl.createStudent);
router.post('/login', studentCtrl.login );
router.get('/:id/courses', auth.getStudent, studentRoleAuth.requireStudentRole, studentCtrl.getAllCourses);
router.get('/:id/courses/:courseId', auth.getStudent, studentRoleAuth.requireStudentRole, studentCtrl.getCoursesById);
router.post('/:id/courses/:courseId/enroll', auth.getStudent, studentRoleAuth.requireStudentRole, otherCtrl.enrollCourse);
router.post('/:id/:courseId/comment', auth.getStudent, studentRoleAuth.requireStudentRole, otherCtrl.placeComment);

module.exports = router;