const express = require("express");
const cors = require("cors");
const path = require("path");
const Dbconfig = require("./db/connection");
const Users = require("./db/register"); // Assuming this is a Mongoose model or similar

const app = express();
const port = 1700;

// Initialize database connection
Dbconfig();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/user", require("./router/users"));

// Start the server
app.listen(port, () => {
  console.log("Server listening on port", port);
});
