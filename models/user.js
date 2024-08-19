const { Schema, default: mongoose } = require("mongoose");
const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
  },
  surname: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    required: true,
  },
  idnumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
