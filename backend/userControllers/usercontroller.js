const PostBlogs = require("../db/register");
// const moment = require("moment");

// Get all  Post data
const getDataControllers = async (req, res) => {
  try {
    const AllData = await PostBlogs.find();
    res.status(201).json({ status: 201, AllData });
  } catch (error) {
    console.log("get data error", error);
    res.status(401).json({ status: 401, error: error.message });
  }
};

//  add Post data
const PostDataControllers = async (req, res) => {
  // Ensure req.file is not undefined before destructuring
  const { filename } = req.file || {};
  const { fname } = req.body;

  // Check validation
  if (!fname || !filename) {
    return res.status(401).json({ status: 401, message: "Fill all the data" });
  }

  try {
    // res.send("api is hitted");
    const date = new Date();

    const userdata = new PostBlogs({
      fname: fname,
      imagepath: filename,
      date: date,
    });

    const finaldata = await userdata.save();
    return res.status(200).json({ status: 200, finaldata });
  } catch (error) {
    console.log("postData Error", error);
    return res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
};

// delete post
const DeleteDataControllers = async (req, res) => {
  console.log("id is ", req.params.id);
  try {
    const { id } = req.params;
    const deleteUser = await PostBlogs.findByIdAndDelete({ _id: id });

    res.status(201).json({ status: 201, deleteUser });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
};

module.exports = {
  PostDataControllers,
  getDataControllers,
  DeleteDataControllers,
};
