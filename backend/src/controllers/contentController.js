// TEMPORARY: In-memory storage (replace with database later)
let contents = {};

// @desc    Get content by page
// @route   GET /api/content/:page
// @access  Public
exports.getContent = async (req, res) => {
  try {
    const content = contents[req.params.page];

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    res.status(200).json({
      success: true,
      data: content
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update content
// @route   PUT /api/content/:page
// @access  Private/Admin
exports.updateContent = async (req, res) => {
  try {
    const { page } = req.params;
    const { sections } = req.body;

    contents[page] = {
      page,
      sections,
      updatedBy: req.user.id,
      updatedAt: new Date()
    };

    res.status(200).json({
      success: true,
      data: contents[page]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
