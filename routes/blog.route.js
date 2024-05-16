const express = require("express");
const blog = require("../models/blog.model");
const router = express.Router();
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
} = require("../controllers/blog.controller");

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post("/", createBlog);
router.patch("/:id", updateBlog);

module.exports = router;
