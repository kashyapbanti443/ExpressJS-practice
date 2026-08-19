const userService = require("../services/userService");

const sendError = (res, error) =>
  res.status(error.statusCode || 500).json({ message: error.message || "Something went wrong" });



const registerUser = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    sendError(res, error);
  }
};

const login = async (req, res) => {
  try {
    const result = await userService.login(req.body);
    res.status(200).json({ message: "Login successful", ...result });
  } catch (error) {
    sendError(res, error);
  }
};

const getUsers = async (req, res) => {
  try {
    res.json(await userService.getUsers());
  } catch (error) {
    sendError(res, error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully", user });
  } catch (error) {
    if (error.name === "CastError") return res.status(400).json({ message: "Invalid user id" });
    sendError(res, error);
  }
};



module.exports = { registerUser, login, getUsers, deleteUser };


