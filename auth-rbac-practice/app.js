require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Auth and RBAC practice API is running" });
});

app.use("/users", userRoutes);

const startServer = async () => {
  if (!process.env.MONGODB_URL || !process.env.JWT_SECRET) {
    throw new Error("MONGODB_URL and JWT_SECRET must be set in .env");
  }

  await connectDB();

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer().catch((error) => {
  console.error("Unable to start server:", error.message);
  process.exit(1);
});
