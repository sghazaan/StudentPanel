const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: false
  },
    deadline: Date,
    questions: [
      {
        question: String,
        options: [
          {
            text: String,
            isCorrect: Boolean,
          },
        ],
        correctOption: Number,
      },
    ],
});


const Quiz =mongoose.model("Quiz",quizSchema)


module.exports = Quiz;