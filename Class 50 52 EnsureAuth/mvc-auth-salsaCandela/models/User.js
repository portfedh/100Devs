// Encryption to hash the password in the database

// Import bcrypt library
const bcrypt = require("bcrypt");
// Import mongoose
const mongoose = require("mongoose");

// Create a new user schema.
// Check that username and email are unique
const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});

// Code to hash and salt the password:
// Executed before saving to the database
UserSchema.pre("save", function save(next) {
  const user = this;
  // If pasword is not modified, skip the hashing process
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

// Helper method for validating user's password.
// Compares a candidate password with stored hash password
UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  console.log("candidatePassword:", candidatePassword);
  console.log("this.password:", this.password);
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return cb(err); // Handle the error by passing it to the callback
    }
    cb(null, isMatch); // Pass the comparison result to the callback
  });
};

// Creates a Mongoose model named "User" based on the "UserSchema" schema
module.exports = mongoose.model("User", UserSchema);
