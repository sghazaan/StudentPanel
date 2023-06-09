const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const path = require('path');

dotenv.config();
const StudentRoutes = require('./routes/studentRoutes');
const db= "mongodb+srv://sghazaan:88888888@onlineeducationplatform.jjhy2ci.mongodb.net/OurCoursera" 
port = 3001;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
      
  }).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });


//connection complete
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, './frontend/ourcoursera/build')))
app.use('/students', StudentRoutes );
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/ourcoursera/build/index.html'))

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
      });