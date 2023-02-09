const express = require('express');
const router = express.Router();

const optionsController = require('../controllers/options');

router.delete('/:id/delete', optionsController.deleteOption);
router.get('/:id/add_vote', optionsController.addVote);

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