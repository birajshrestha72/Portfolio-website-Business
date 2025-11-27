const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide location title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide location description']
  },
  image: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
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

locationSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Location', locationSchema);
