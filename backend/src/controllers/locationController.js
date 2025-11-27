// TEMPORARY: In-memory storage (replace with database later)
let locations = [];
let locationIdCounter = 1;

// @desc    Get all locations
// @route   GET /api/locations
// @access  Public
exports.getLocations = async (req, res) => {
  try {
    const activeLocations = locations.filter(l => l.isActive).sort((a, b) => a.order - b.order);

    res.status(200).json({
      success: true,
      count: activeLocations.length,
      data: activeLocations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get single location
// @route   GET /api/locations/:id
// @access  Public
exports.getLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);

    if (!location) {
      return res.status(404).json({
        success: false,
        message: 'Location not found'
      });
    }

    res.status(200).json({
      success: true,
      data: location
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Create location
// @route   POST /api/locations
// @access  Private/Admin
exports.createLocation = async (req, res) => {
  try {
    const locationData = {
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : ''
    };

    const location = await Location.create(locationData);

    res.status(201).json({
      success: true,
      data: location
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update location
// @route   PUT /api/locations/:id
// @access  Private/Admin
exports.updateLocation = async (req, res) => {
  try {
    let location = await Location.findById(req.params.id);

    if (!location) {
      return res.status(404).json({
        success: false,
        message: 'Location not found'
      });
    }

    const updateData = {
      ...req.body,
      ...(req.file && { image: `/uploads/${req.file.filename}` })
    };

    location = await Location.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: location
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Delete location
// @route   DELETE /api/locations/:id
// @access  Private/Admin
exports.deleteLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);

    if (!location) {
      return res.status(404).json({
        success: false,
        message: 'Location not found'
      });
    }

    await location.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Reorder locations
// @route   PUT /api/locations/reorder
// @access  Private/Admin
exports.reorderLocations = async (req, res) => {
  try {
    const { locations } = req.body;

    const updatePromises = locations.map(location => 
      Location.findByIdAndUpdate(location.id, { order: location.order })
    );

    await Promise.all(updatePromises);

    res.status(200).json({
      success: true,
      message: 'Locations reordered successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
