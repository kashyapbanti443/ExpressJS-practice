
require("dotenv").config();
const express = require("express");
const errorMiddleware= require("./middleware/errorMiddleware");
//conndb

const connectDB = require("./config/db");
const app = express();
app.use(express.json());



const userRoutes= require("./routes/userRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
//const ecommercRoutes = require("./routes/ecommercRoutes");
 const studentRoutes = require("./routes/studentRoutes")
 const productRoutes = require("./routes/productRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const bankRoutes = require("./routes/bankRoutes");
//const newuserRoutes = require("./routes/newuserRoutes");



//app.use("/newuser", newuserRoutes);
app.use ("/users", userRoutes)
 app.use ("/students",studentRoutes);
 app.use ("/products",productRoutes);
// app.use("/products", ecommercRoutes);
 app.use("/teachers", teacherRoutes);
app.use("/employees", employeeRoutes);
app.use("/bankusers", bankRoutes);


// Static uploads
app.use("/uploads", express.static("uploads"));

app.use(errorMiddleware);


const startServer = async () => {
  await connectDB();

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};

startServer().catch(() => {
  process.exit(1);
});



