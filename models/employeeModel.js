const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  // id: {
  //   type: Number,
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  // department: {
  //   type: String,
  //   required: true,
  // },
  // salary: {
  //   type: Number,
  //   required: true,
  // },
  email:{
    type: String,
    required: true
  },

  password:{
    type: String,
    required: true
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
