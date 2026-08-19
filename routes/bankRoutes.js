
const express= require("express");

const router= express.Router();

router.use(express.json());


const {registerUser, getUser, getUserById, updateUSer, deleteUser, firstThreeUser}= require("../controllers/bankController");

router.post("/register", registerUser);
router.get("/", getUser);
router.get("/:id", getUserById)
router.put("/:id", updateUSer);
router.delete("/:id", deleteUser);
router.get("/limit/3", firstThreeUser)





module.exports= router;


