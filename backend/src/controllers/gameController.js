// TEMPORARY: In-memory storage (replace with database later)
let games = [];
let gameIdCounter = 1;

// @desc    Get all games
// @route   GET /api/games
// @access  Public
exports.getGames = async (req, res) => {
  try {
    const activeGames = games.filter(g => g.isActive).sort((a, b) => a.order - b.order);

    res.status(200).json({
      success: true,
      count: activeGames.length,
      data: activeGames
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get single game
// @route   GET /api/games/:id
// @access  Public
exports.getGame = async (req, res) => {
  try {
    const game = games.find(g => g._id === req.params.id);

    if (!game) {
      return res.status(404).json({
        success: false,
        message: 'Game not found'
      });
    }

    res.status(200).json({
      success: true,
      data: game
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Create game
// @route   POST /api/games
// @access  Private/Admin
exports.createGame = async (req, res) => {
  try {
    const gameData = {
      _id: String(gameIdCounter++),
      title: req.body.title,
      description: req.body.description,
      category: req.body.category || 'arcade',
      image: req.file ? `/uploads/${req.file.filename}` : '',
      order: games.length,
      isActive: req.body.isActive !== 'false',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    games.push(gameData);

    res.status(201).json({
      success: true,
      data: gameData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update game
// @route   PUT /api/games/:id
// @access  Private/Admin
exports.updateGame = async (req, res) => {
  try {
    const gameIndex = games.findIndex(g => g._id === req.params.id);

    if (gameIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Game not found'
      });
    }

    const updatedGame = {
      ...games[gameIndex],
      title: req.body.title || games[gameIndex].title,
      description: req.body.description || games[gameIndex].description,
      category: req.body.category || games[gameIndex].category,
      isActive: req.body.isActive !== undefined ? req.body.isActive !== 'false' : games[gameIndex].isActive,
      updatedAt: new Date()
    };

    if (req.file) {
      updatedGame.image = `/uploads/${req.file.filename}`;
    }

    games[gameIndex] = updatedGame;

    res.status(200).json({
      success: true,
      data: updatedGame
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Delete game
// @route   DELETE /api/games/:id
// @access  Private/Admin
exports.deleteGame = async (req, res) => {
  try {
    const gameIndex = games.findIndex(g => g._id === req.params.id);

    if (gameIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Game not found'
      });
    }

    games.splice(gameIndex, 1);

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

// @desc    Reorder games
// @route   PUT /api/games/reorder
// @access  Private/Admin
exports.reorderGames = async (req, res) => {
  try {
    const { games: reorderedGames } = req.body;

    reorderedGames.forEach(({ id, order }) => {
      const game = games.find(g => g._id === id);
      if (game) {
        game.order = order;
      }
    });

    res.status(200).json({
      success: true,
      message: 'Games reordered successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
