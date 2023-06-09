const express = require('express');
const router = express.Router();

const studentCtrl = require('../controllers/studentCtrl');
const otherCtrl = require('../controllers/otherOperationsCtrl');
const auth = require('../middleware/auth');
const studentRoleAuth = require('../middleware/roleBasedAuth');
router.put('/updateProfile/:id', studentRoleAuth.requireStudentRole, auth.getStudent, studentCtrl.updateProfile);
router.delete('/deleteProfile/:id', studentRoleAuth.requireStudentRole, auth.getStudent, studentCtrl.deleteProfile);
router.post('/signup',studentCtrl.createStudent);
router.post('/login',  studentCtrl.login );
router.get('/getId/:email', studentCtrl.getId); //below one is ALL COURSES
router.get('/:id/courses', auth.getStudent, studentRoleAuth.requireStudentRole, studentCtrl.getAllCourses);
router.get('/:id/courses/:courseId', auth.getStudent, studentRoleAuth.requireStudentRole, studentCtrl.getCoursesById);
router.post('/:id/courses/:courseId/enroll', auth.getStudent, studentRoleAuth.requireStudentRole, otherCtrl.enrollCourse);
router.post('/:id/:courseId/comment', auth.getStudent, studentRoleAuth.requireStudentRole, otherCtrl.placeComment);
router.get('/:id/:courseId/viewComments', auth.getStudent, studentRoleAuth.requireStudentRole, otherCtrl.viewComments);
router.get('/:id/instructors/:iid', auth.getStudent, studentRoleAuth.requireStudentRole, otherCtrl.getInstructorById);
router.get('/:id/:courseId/quizzes', auth.getStudent, studentRoleAuth.requireStudentRole, otherCtrl.getQuizzes);

// router.get('/:id/:courseId/viewComments', auth.getStudent, studentRoleAuth.requireStudentRole, otherCtrl.viewComments);
//auth.getStudent, 

module.exports = router;