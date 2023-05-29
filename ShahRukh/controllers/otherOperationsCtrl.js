const Student = require('../models/user');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const Course = require('../models/course');
const Forum = require('../models/forum');
exports.enrollCourse = async (req, res) => {    
try{
    const courseId = req.params.courseId;
    const studentId = req.params.id;
    // console.log(courseId);
    // console.log(studentId);
    const course = await Course.findById(courseId);
    const student = await Student.findById(studentId); 
    //two conditions to check if the student is already enrolled or not
    //1. check if the student is already enrolled in the course
    //2. check if the course is already enrolled by the student
    if(course.students.includes(studentId) || student.courses.includes(courseId)){
        return res.status(400).json("Cannot create a duplicate entry");
    }
    course.students.push(student);
    student.courses.push(course);
    console.log("pushing of student and course done");
    await course.save();
    await student.save();
    res.status(200).json("enrolled successfully");
}catch(err){
    console.log(err);
    res.status(500).json({message: "Something went wrong in catch part of enrollCourse"});
}
}
exports.placeComment = async (req, res) => {
    try{
        const courseId = req.params.courseId;
        const studentId = req.params.id;
        const course = await Course.findById(courseId);
        const student = await Student.findById(studentId); 
        console.log(student);
        if((!student) || (!course)){
                res.status(404).json("Either student or course not found");
        }
        const {comment} = req.body;
        const forumObj = new Forum({
            person: student,
            comment: comment,
            course: course
        });
        await forumObj.save();
        res.status(200).json("comment placed successfully");

    }catch(err){
        res.status(500).json({message: "Something went wrong in catch part of placeComment"});
    }
}

exports.viewComments = async (req, res) => {
    try{
        console.log("viewComments function is called");
        const courseId = req.params.courseId;
        const studentId = req.params.id;
        const course = await Course.findById(courseId);
        const student = await Student.findById(studentId); 
        console.log(student);
        if( (!course)){
                res.status(404).json("Course not found");
        }
        const forumObj = await Forum.find(courseId);
        res.status(200).json(forumObj);

    }catch(err){
        res.status(500).json({message: "Something went wrong in catch part of viewComments"});
    }
}