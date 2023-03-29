const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
studentSchema.plugin(mongoosePaginate);
const Student = mongoose.model(studentCollection, studentSchema);
module.exports = Student;
