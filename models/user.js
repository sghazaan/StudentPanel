const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      fName: {
        type: String,
        required: false
      },
      nicNumber: {
        type: Number,
        required: false
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
        },   
     courses: [{
         type: mongoose.Schema.Types.ObjectId,
        ref: 'course',
        required: false
         }] ,
      role: {
        type: String,
        enum: ['student', 'instructor', 'admin'],
        required: [true, "Role is required"],
        },
      
});
module.exports = mongoose.model('User', userSchema);
