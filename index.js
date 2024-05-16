const express = require("express");
const mongoose = require("mongoose");
const blog = require("./models/blog.model");
const blogController = require("./controllers/blog.controller");
const blogRouter = require("./routes/blog.route");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/blogs", blogRouter);

// get request to home route
app.get("/", (req, res) => {
  res.send("Welcome to Blog API");
});

// Connect to MongoDB and start the server
mongoose
  .connect(
    "mongodb+srv://sameerse:WAiK$2.Xj9sqAXH@blog.bgxkuiu.mongodb.net/?retryWrites=true&w=majority&appName=blog"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, function () {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection failed!");
  });
