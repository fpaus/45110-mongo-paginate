//student mongoose model
const mongoose = require('mongoose');

const studentCollection = 'students';
const studentSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  courses: {
    type: Array,
    required: true,
  },
});

const Student = mongoose.model(studentCollection, studentSchema);
module.exports = Student;
