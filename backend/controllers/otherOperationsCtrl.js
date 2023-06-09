const Student = require('../models/user');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const Course = require('../models/course');
const Quiz = require('../models/quizSchema');
const Forum = require('../models/forum');
const mongoose = require('mongoose');
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
        const idFromParam = req.params.courseId;
        const cleanedId = idFromParam.replace(':', ''); 
        const objectId = new mongoose.Types.ObjectId(cleanedId); 
        const courseId = objectId;
        console.log(courseId);
        const idFromParam2 = req.params.id;
        const cleanedId2 = idFromParam2.replace(':', ''); 
        const objectId2 = new mongoose.Types.ObjectId(cleanedId2); 
        const studentId = objectId2;
        console.log("my courseId is: ", courseId);
        console.log("studentId is: ", studentId);
        const course = await Course.findById(courseId);
        const student = await Student.findById(studentId); 
       // console.log(student);
        if((!student) || (!course)){
                res.status(404).json("Either student or course not found");
        }
        const {comment} = req.body;
        console.log("comment is: ", comment)
        const forumObj = new Forum({
            person: student,
            comment: comment,
            course: course
        });
        await forumObj.save();
        console.log("forumObj saved successfully");
        res.status(200).json("comment placed successfully");

    }catch(err){
        res.status(500).json({message: "Something went wrong in catch part of placeComment"});
    }
}

exports.viewComments = async (req, res) => {
    try{
        const idFromParam = req.params.courseId;
        const cleanedId = idFromParam.replace(':', ''); 
        const objectId = new mongoose.Types.ObjectId(cleanedId); 
        const courseId = objectId;
        console.log("sHAH rUKH Here");
        //console.log("my courseId is: ", courseId);
        // const course = await Course.findById(courseId);
        // if( (!course)){
        //         res.status(404).json("Course not found");
        // }
        const forumObj = await Forum.find({course: courseId});
        console.log("forumObj is: ", forumObj);
        res.status(200).json(forumObj);

    }catch(err){
        res.status(500).json({message: "Something went wrong in catch part of viewComments"});
    }
}
exports.getInstructorById = async (req, res) => {
    try{
        const instructorId = req.params.iid;
        const instructor = await Student.findById(instructorId);
        console.log("instructor's first name is: ", instructor.firstName)
        res.status(200).json(instructor);
    }catch(err){
        res.status(500).json({message: "Something went wrong in catch part of getInstructorById"});
    }

}
exports.getQuizzes = async (req, res) => {
    console.log("getQuizzes is called");
    try{
        const idFromParam = req.params.courseId;
        const cleanedId = idFromParam.replace(':', ''); 
        const objectId = new mongoose.Types.ObjectId(cleanedId); 
        const courseId = objectId     
          console.log("courseId is backend is: ", courseId);
        const quizzes = await Quiz.find({course: courseId}); 
        console.log("quizzes are: ", quizzes);  
        if(!quizzes){
            res.status(404).json("No quizzes found");
        } 
        res.status(200).json(quizzes);

    } catch(err){
        res.status(500).json({message: "Something went wrong in catch part of getQuizzes"});
    }
}