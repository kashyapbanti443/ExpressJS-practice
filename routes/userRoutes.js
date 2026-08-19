const express = require("express");

const router = express.Router();

const {
    registerUser,
    login,
    getUser, 
    getUserById,
    updateUser,
    deleteUser
} = require("../controllers/userController");

const { authMiddleware } = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/register", registerUser);
// Login
router.post("/login", login);

// Protected Route
router.get("/users", authMiddleware, getUser);

router.get("/", getUser);
// Get User By Id

router.get("/:id", getUserById);
router.put("/:id", updateUser)

// Only Admin Can Delete User
router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware("Admin"),
    deleteUser
);


const upload =
    require("../middleware/uploadMiddleware");

router.post(
    "/upload",
    upload.single("profileImage"),
    (req, res) => {

        console.log(req.file);

        res.json({
            message: "File uploaded successfully",
            file: req.file
        });

    }
);



module.exports = router;


