const Student = require('../models/student');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
 exports.createStudent = async(req, res) => {
    try{
        const student = new Student({
            name: req.body.name,
            fName: req.body.fName,
            nicNumber: req.body.nicNumber,
            email: req.body.email,
            password: req.body.password,
        });
        await student.save()  
        res.json("student created");    
    } catch(err){
        console.log(err);
        res.json("hello I am catch part of createStudent")
    } 
}
exports.login = async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
  
    const { email, password } = req.body;
  
    try {
      let student = await Student.findOne({ email });
  
      if (!student) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, student.password);
  
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      } else{
        res.json({ msg: 'Login successful' });

      }
    } catch (err) {
      console.error(err.message);
      //res.status(500).send('Server error');
    }
  }




//module.exports =  createStudent 
