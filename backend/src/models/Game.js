const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide game title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide game description']
  },
  image: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    enum: ['arcade', 'carnival', 'indoor', 'outdoor'],
    default: 'arcade'
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update timestamp on save
gameSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Game', gameSchema);
