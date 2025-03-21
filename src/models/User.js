const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: String,
  dob: String,
  address: String,
  phoneNumber: String,
  state: String,
  zipCode: String,
  email: { 
    type: String, 
    unique: true 
  },
  gender: String,
  userType: String,
  password: String,
});
module.exports = mongoose.model('User', UserSchema);