const express = require('express');
const {
  getGames,
  getGame,
  createGame,
  updateGame,
  deleteGame,
  reorderGames
} = require('../controllers/gameController');
const { protect, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.route('/')
  .get(getGames)
  .post(protect, authorize('admin', 'editor'), upload.single('image'), createGame);

router.route('/reorder')
  .put(protect, authorize('admin', 'editor'), reorderGames);

router.route('/:id')
  .get(getGame)
  .put(protect, authorize('admin', 'editor'), upload.single('image'), updateGame)
  .delete(protect, authorize('admin'), deleteGame);

module.exports = router;
