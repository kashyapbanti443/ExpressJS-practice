const express = require("express");
const {
  registerUser,
  login,
  getUsers,
  deleteUser,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const uploads = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.post("/upload", uploads.single("profileImage"), (req, res) => {
  res.json({
    message: "File uploaded successfully",
    file: req.file,
  });
});
// RBAC examples: a valid JWT is required, then the role is checked.
router.get("/", authMiddleware, roleMiddleware("Admin"), getUsers);

router.delete("/:id", authMiddleware, roleMiddleware("Admin"), deleteUser);

//upload
router.post("/uploads", uploads.single("profileImage"), (req, res) => {
  res.json({
    message: "File uploaded successfully",
    file: req.file,
  });
});
module.exports = router;
