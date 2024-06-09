const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  imagepath: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});

const PostBlogs = mongoose.model("PostBlogs", blogsSchema);

module.exports = PostBlogs;
