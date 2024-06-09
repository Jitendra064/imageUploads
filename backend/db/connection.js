const mongoose = require("mongoose");
const router = require("../router/users");

const URL =
  "mongodb://127.0.0.1:27017/SocialBloges?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.1";

const Dbconfig = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Data base Connect mongoDB");
  } catch (error) {
    console.log("Error is ", error);
  }
};

module.exports = Dbconfig;
