const express = require('express');
const router = express.Router();

const questionsController = require('../controllers/questions');

router.get('/:id', questionsController.getQuestion);
router.post('/:id/options/create', questionsController.createOption);
router.post('/create', questionsController.createQuestion);
router.delete('/:id/delete', questionsController.deleteQuestion);

// Handle 404 errors
router.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });
  
  // Error handler
  router.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });

  
module.exports = router;