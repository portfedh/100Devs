// Encryption to hash the password in the database
// ***********************************************

// ***********
// * Imports *
// ***********
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// *********************
// * Create a new user *
// *********************
// Check that username and email are unique
const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});

// ******************************
// * Hash and salt the password *
// ******************************
// Executed before saving to the database
UserSchema.pre("save", function save(next) {
  const user = this;
  // If password is not modified, skip the hashing process
  if (!user.isModified("password")) {
    return next();
  }
  // Generate salt value with complexity 10
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    // Hash password and store in user.password
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// *******************************************************
// * Compare provided password with stored hash password *
// *******************************************************
UserSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    // Compare the plain text password provided by the user with the stored hashed password
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    // isMatch will be set to true if they are equal
    return isMatch;
  } catch (err) {
    throw err;
  }
};

// Creates a Mongoose model named "User" based on the "UserSchema" schema
module.exports = mongoose.model("User", UserSchema);
