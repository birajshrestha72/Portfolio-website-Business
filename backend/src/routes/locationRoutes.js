const express = require('express');
const {
  getLocations,
  getLocation,
  createLocation,
  updateLocation,
  deleteLocation,
  reorderLocations
} = require('../controllers/locationController');
const { protect, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.route('/')
  .get(getLocations)
  .post(protect, authorize('admin', 'editor'), upload.single('image'), createLocation);

router.route('/reorder')
  .put(protect, authorize('admin', 'editor'), reorderLocations);

router.route('/:id')
  .get(getLocation)
  .put(protect, authorize('admin', 'editor'), upload.single('image'), updateLocation)
  .delete(protect, authorize('admin'), deleteLocation);

module.exports = router;
