const { Router } = require('express');
const studentModel = require('../models/students.model');
const router = Router();

router.get('/students', async (req, res) => {
  const query = req.query;
  const students = await studentModel.paginate(
    {},
    { page: query.page ?? 1, limit: query.limit ?? 10, lean: true },
  );

  res.render('student', {
    title: 'Students',
    students: students.docs,
    pages: students.totalPages,
    page: students.page,
    prev: students.prevPage,
    next: students.nextPage,
    hasPrevPage: students.hasPrevPage,
    hasNextPage: students.hasNextPage,
  });
});

module.exports = router;
