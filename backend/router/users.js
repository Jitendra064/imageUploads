const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Image storage path
const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, uploadsDir);
  },
  filename: (req, file, callback) => {
    callback(null, `image_${Date.now()}_${file.originalname}`);
  },
});

// Image filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only images are allowed")); // Corrected grammar
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

const {
  PostDataControllers,
  getDataControllers,
  DeleteDataControllers,
} = require("../userControllers/usercontroller");

router.get("/getdata", getDataControllers);
router.post("/postdata", upload.single("photo"), PostDataControllers);
router.delete("/deletedata/:id", DeleteDataControllers);

module.exports = router;
