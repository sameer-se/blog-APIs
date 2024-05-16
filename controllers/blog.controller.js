const blog = require("../models/blog.model");

//   api request to get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// api request to get a blog by id
const getBlog = async (req, res) => {
  try {
    const blog = await blog.findById(req.params.id);
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// api request to create a blog
const createBlog = async (req, res) => {
  const newBlog = new blog({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
  });
  try {
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (error) {
    res.status.json({ message: error.message });
  }
};

// api request to update a blog
const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await blog.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBlogs, getBlog, createBlog, updateBlog };
