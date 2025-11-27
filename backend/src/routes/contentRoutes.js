const express = require('express');
const {
  getContent,
  updateContent
} = require('../controllers/contentController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/:page')
  .get(getContent)
  .put(protect, authorize('admin', 'editor'), updateContent);

module.exports = router;
