const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://sghazaan:88888888@onlineeducationplatform.jjhy2ci.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });


  
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
const studVar = mongoose.model('Student', studentSchema);
const stud1 = new studVar({
    name: 'Shah Rukh',
    fName: 'Ghazaan',
    nicNumber: 123456789,
    email: 'i200995@nu.edu.pk',
    password: '12345678',
});
stud1.save();
