const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'  
},
    comment: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('Forum', forumSchema);