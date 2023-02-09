const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    options: [{
      text: {
        type: String,
        required: true
      },
      votes: {
        type: Number,
        default: 0
      }
    }]
  });
  
  const Question = mongoose.model('Question', questionSchema);

  module.exports = Question;