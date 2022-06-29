const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: function () {
        return /^[\w]+@[a-z]+\.[a-z]+$/.test(this.email);
      },
      message: "You should fill in a valid email address.",
    },
  },
  username: { type: String, required: true, minlength: 4 },
  password: { type: String, required: true, minlength: 4 },
  businessBuyed: [{ type: mongoose.Types.ObjectId, ref: "Business" }],
  businessCreated: [{ type: mongoose.Types.ObjectId, ref: "Business" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
