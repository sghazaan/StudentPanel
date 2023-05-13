const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      fName: {
        type: String,
        required: true
      },
      nicNumber: {
        type: Number,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
        },    
      
});
module.exports = mongoose.model('Student', studentSchema);






// const studVar = mongoose.model('Student', studentSchema);
// const stud1 = new studVar({
//     name: 'Shah Rukh',
//     fName: 'Ghazaan',
//     nicNumber: 123456789,
//     email: 'i200995@nu.edu.pk',
//     password: '12345678',
// });
// stud1.save();
