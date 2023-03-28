//creater faker student
const { faker } = require('@faker-js/faker');
const Student = require('./src/models/students.model');
const { mongo_connection } = require('./config');
const mongoose = require('mongoose');
const courses = [
  'Programación Backend',
  'Programación Frontend con React',
  'Testing',
  'UI/UX',
];

function createFakeStudent() {
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    courses: [courses[Math.floor(Math.random() * courses.length)]],
  };
}

mongoose.connect(mongo_connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Array(500)
  .fill(null)
  .map(() => {
    const student = createFakeStudent();
    Student.create(student);
  });
