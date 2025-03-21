const mongoose = require("mongoose");

const CarrierSchema = new mongoose.Schema({
  company_name: { 
    type: String, 
    required: true, 
    unique: true 
  }
}, { timestamps: true });

module.exports = mongoose.model("Carrier", CarrierSchema);
