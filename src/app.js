// express server with handlebars
const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const { mongo_connection, port } = require('../config');
const Student = require('./models/students.model');

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/', require('./routes/views.router'));

mongoose.connect(mongo_connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
