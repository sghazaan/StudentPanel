const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const StudentRoutes = require('./routes/studentRoutes');
//MONGO_URI= "mongodb+srv://sghazaan:88888888@onlineeducationplatform.jjhy2ci.mongodb.net/OurCoursera"
const db= process.env.MONGO_URI 
port = 3000

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
      
  }).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });


//connection complete
app.use(express.json());
app.use('/students', StudentRoutes );
app.get('/', (req, res) => {
    res.send("Hello World");
  }
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
      });