// Import to hash and comparing passwords
const bcrypt = require("bcrypt");
// Import Mongoose
const mongoose = require("mongoose");

// New Mongoose schema
// *******************
// Username and email must be unique in the database
const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});

// Password hash middleware
// ************************
// Middleware function that runs before saving a user to database
// Called when save() is called
UserSchema.pre("save", function save(next) {
  // Object being saved
  const user = this;
  // Check if the user's password has been modified
  if (!user.isModified("password")) {
    return next();
  }
  // Generate a salt for password hashing
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    // Hashes the password with the generated salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      // Set the password to the hash value
      user.password = hash;
      next();
    });
  });
});

// Helper method for validating user's password
// ********************************************
// Compare user password with db password
// Result is passed to callback 'cb'
UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

// Exports model named "User" based on the "UserSchema
module.exports = mongoose.model("User", UserSchema);
