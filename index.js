const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to MongoDB and start the server
mongoose
  .connect(
    "mongodb+srv://sameerse:WAiK$2.Xj9sqAXH@blog.bgxkuiu.mongodb.net/?retryWrites=true&w=majority&appName=blog"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, function () {
      console.log("Server is running on port 2002");
    });
  })
  .catch((error) => {
    console.log("Connection failed!");
  });

//   api request
app.get("/", function (req, res) {
  res.send("Hello World");
});
