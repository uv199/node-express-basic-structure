const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: [true, "User email required"] },
  phoneNoi: { type: Number },
  address: String,
  image: String,
});

const User = mongoose.model("user", userSchema);
module.exports = { User };
