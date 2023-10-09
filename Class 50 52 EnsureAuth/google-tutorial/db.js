// Import sqlite3 library to interact with SQLite databases
var sqlite3 = require("sqlite3");

// Import library for creating directories
// To make sure the directory with the database exist
var mkdirp = require("mkdirp");

// Import library to make cryptographic operations
var crypto = require("crypto");

// Create the directory if it doesn't exist.
// This directory will be used to store the SQLite database file
mkdirp.sync("var/db");

// Create a new SQLite database object and connects to database
var db = new sqlite3.Database("var/db/todos.db");

// Defines a series of database operations to be executed sequentially
db.serialize(function () {
  // Create the database schema for the todos app

  // 'users' table
  db.run(
    "CREATE TABLE IF NOT EXISTS users ( \
    id INTEGER PRIMARY KEY, \
    username TEXT UNIQUE, \
    hashed_password BLOB, \
    salt BLOB, \
    name TEXT, \
    email TEXT UNIQUE, \
    email_verified INTEGER \
  )"
  );

  // 'federated_credentials' table
  db.run(
    "CREATE TABLE IF NOT EXISTS federated_credentials ( \
    id INTEGER PRIMARY KEY, \
    user_id INTEGER NOT NULL, \
    provider TEXT NOT NULL, \
    subject TEXT NOT NULL, \
    UNIQUE (provider, subject) \
  )"
  );

  // 'todos' table
  db.run(
    "CREATE TABLE IF NOT EXISTS todos ( \
    id INTEGER PRIMARY KEY, \
    owner_id INTEGER NOT NULL, \
    title TEXT NOT NULL, \
    completed INTEGER \
  )"
  );

  // Generate random 16-byte salt using the crypto library.
  // Used in password hashing to increase security.
  var salt = crypto.randomBytes(16);

  // Create an initial user (username: alice, password: letmein)
  // For demonstration purposes
  // INSERT OR IGNORE statement ensures if a user already exists, it won't be duplicated.
  db.run(
    "INSERT OR IGNORE INTO users (username, hashed_password, salt) VALUES (?, ?, ?)",
    ["alice", crypto.pbkdf2Sync("letmein", salt, 310000, 32, "sha256"), salt]
  );
});

// Exports the db object for other modules to use
module.exports = db;
