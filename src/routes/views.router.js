const { Router } = require('express');

const router = Router();

router.get('/students', async (req, res) => {
  res.render('student', {
    title: 'Students',
  });
});

module.exports = router;
