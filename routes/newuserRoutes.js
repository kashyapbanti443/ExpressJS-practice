const express=require("express");
const router=express.Router();


const {registerUser, getUser, getUserById, updateUser, deleteUser, firstThreeUser, getOneUser}= require("../controllers/newuserController");




router.post("/register", registerUser);
router.get("/", getUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/lomit/3", firstThreeUser);
router.get("/:name", getOneUser);







module.exports= router;

