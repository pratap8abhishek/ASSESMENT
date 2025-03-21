// models/Policy.js
const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
  policyNumber: { 
    type: String, 
    required: true, 
    unique: true 
  },
  policyStartDate: { 
    type: Date, 
    required: true 
  },
  policyEndDate: { 
    type: Date, 
    required: true 
  },
  lob: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'LOB', 
    required: true 
  },
  carrier: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Carrier', 
    required: true 
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
});

module.exports = mongoose.model('Policy', PolicySchema);
