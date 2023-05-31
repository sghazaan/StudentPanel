const User = require('../models/user');

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
  try {
    // try{
    //   const email = req.body.email;
    //   console.log("Email is: ", email)
    //   let u = await User.findOne({ email: email });
    //   if(!u){
    //     return res.status(403).json({ msg: 'Student not found' });
    //   } 
    //   if(u.role !== 'student'){
    //     console.log("Access denied: Role of student required")
    //     return res.status(403).json({ msg: 'Access denied: role of the student required' });
    //   }
    //   console.log("Access granted: Role of student was required")
    //   next();
    //   return;
    // }catch(err){
    //   console.log("Access denied: Role of student required");
    // }
    //  res.status(500).send('Server error occured here');
    const user = await User.findById(req.params.id);
    if (user.role !== 'student') {
      return res.status(403).json({ msg: 'Access denied: role of the student required' });
    }
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
