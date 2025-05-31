const {Schema} = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
 phone:{
    type: "Number",
    required: true
 },
 email:{
  type: String,
  required: true,
  unique: true
 },

  password: {
    type: String,
    required: true
  }
});


module.exports = {userSchema};