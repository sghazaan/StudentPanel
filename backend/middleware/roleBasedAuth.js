const User = require('../models/user');
const mongoose = require('mongoose');


exports.requireAdminRole = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== 'admin') {
      return res.status(403).json({ msg: 'Access denied: Here we require the role of the admin' });
    }
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error occured here');
  }
};

exports.requireStudentRole = async (req, res, next) => {
  const idFromParam = req.params.id;
const cleanedId = idFromParam.replace(':', ''); 
const objectId = new mongoose.Types.ObjectId(cleanedId); 
const studentId = objectId;
// console.log(studentId);


  try {
    const user = await User.findById(studentId);
    if (user.role !== 'student') {
      return res.status(403).json({ msg: 'Access denied: role of the student required' });
    }
    // console.log("Access granted: It is a student2")
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error occured here in requireStudentRole');
  }
};

exports.requireInstructorRole = async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      if (user.role !== 'instructor') {
        return res.status(403).json({ msg: 'Access denied: role of the instructor required' });
      }
      next();
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error occured here');
    }
  };
