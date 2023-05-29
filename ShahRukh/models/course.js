const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  start_date: {
    type: Date,
    default: Date.now()
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Forum',
    }
  ],
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;