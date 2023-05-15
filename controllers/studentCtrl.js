const Student = require('../models/user');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const Course = require('../models/course');
 exports.createStudent = async(req, res) => {
    const { firstName, lastName,  email, password, role } = req.body;
    try{
        const existingUser = await Student.findOne({email: email});
        if(existingUser){
            return res.status(400).json({msg: "User already exists"});
        } 
        const hashedPassword = await bcrypt.hash(password, 10);
        const student = new Student({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            role: role
        });
        await student.save();
        const token = auth.setStudent(student);
        res.status(201).json({student: student, token: token});
    } catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong in catch part of createStudent"});
        //res.json("hello I am catch part of createStudent")
    } 
}
exports.login = async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
  
    const { email, password } = req.body;
  
    try {
      let student = await Student.findOne({ email: email });
  
      if (!student) {
        return res.status(404).json({ msg: 'no such email found' });
      }
      //const isMatch = await bcrypt.compare(password, student.password);
      const matchPassword = await bcrypt.compare(password, student.password);
      if(!matchPassword){
        return res.status(400).json({ msg: 'Invalid password' });
        }
        console.log("login successful");
       const token = auth.setStudent(student);
       return res.status(201).json({student: student, token: token});
       //res.cookie("uid", token);
       //return res.json({token});
        
    } catch (err) {
      console.error(err.message);
      //res.status(500).send('Server error');
    }
  }


    exports.updateProfile = async (req, res) => {
        const { email, password, firstName, lastName } = req.body;
        let sameEmail = false;
        if(email){
        const existingStudent = await Student.findOne({email: email});
        if(existingStudent){
            if(existingStudent.id === req.params.id){
                sameEmail = true;
            } else{
            return res.status(400).json({msg: "Entered email address is already taken by someone else"});
            }
        } 
    }
        const studentFields = {};
        if (firstName) studentFields.name = name;
        if (lastName) studentFields.fName = fName;
        if (email) studentFields.email = email;
        if (password) studentFields.password = await bcrypt.hash(password, 10);
      
        try {
          const student = await Student.findOneAndUpdate(
            { _id: req.params.id },
            { $set: studentFields },
            { new: true }
          );
          if (!student) {
            return res.status(404).json({ msg: 'Student not found' });
          }
          res.json(student);
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server error');
        }
      };
      exports.deleteProfile = async (req, res) => { 
        objId = req.params.id 
        console.log("deleteProfile function is called")
        const {email, password} = req.body;
        try {
        let existingStudent = await Student.findOne({email: email}) 
        console.log(existingStudent);
        if(existingStudent){
            const matchPassword = await bcrypt.compare(password, existingStudent.password);
            console.log(matchPassword);
            if(!matchPassword){
                res.status(404).json( "password is incorrect")
            }
                //then email and password both have matched
                const student = await Student.findByIdAndDelete(objId)
                console.log("deleting the student profile")
                res.status(200).json("student profile deleted successfully")
        } else{
            res.status(404).json( "no such user found")
        }

        }catch(err){
            res.status(404).json("Some error occured while deleting")
        }
    }
    exports.getAllCourses = async (req, res) => {
        try{
            const courses = await Course.find();
            res.status(200).json(courses);      
        } catch(err){
            console.log(err);
            res.status(500).json({message: "Something went wrong in catch part of getAllCourses"});
        }
    }
    exports.getCoursesById = async (req, res) => {
      const courseId = req.params.courseId;
      try{
        const course = await Course.findById(courseId);
        res.status(200).json(course);      
      } catch(err){
          console.log(err);
          res.status(500).json({message: "Something went wrong in catch part of getCoursesById"});
      }
    }
      

//module.exports =  createStudent 
