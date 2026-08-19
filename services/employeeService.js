const { message } = require("statuses");

const bcrypt = require("bcrypt");

const Employee = require("../models/employeeModel");
//const { create } = require("../models/productModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");



// const createEmployee = async (employeeData) => {
//   const employee = await Employee.create(employeeData);
//   return employee;
// };

const getEmployees= async()=>{
const employee= await Employee.find();
return employee;

}

//register employee

const registerEmployee=async(data)=>{

const hashedPassord= await bcrypt.hash(data.password, 10);
data.password=hashedPassord;

return Employee.create(data);

}



//login

const login=async(data)=>{

const employee= await Employee.findOne({email: data.email});
if(!employee){

  return {

    success: false,
    message: "employee not found"
  };
}
  const match= await bcrypt.compare(data.password, employee.password);

  if(!match){

    return {

      success: false,
      message: "Invalid Password"
    };
  }

  const token= jwt.sign({

    id: employee._id,
    email: employee.email
  },
  process.env.JWT_SECRET,
{
expiresIn: "1h"
});


return {
    success: true,
    message: "Login Successfully",
    token,
    Employee
  };
}




//get one employee
const getEmployeeById=async(id)=>{

  return await Employee.findById(id);
}
//salary low to high
const salaryLowToHigh=async()=>{

  return await Employee.find().sort({salary: 1})
}
//salary high to low
const salaryHighToLow=async()=>{

  return await Employee.find().sort({salary: -1});
}
//only 3 Employees
const firstThreeEmployee=async()=>{

  return await Employee.find().limit(3);
}


const updateEmployee=async(id, data)=>{

  return await Employee.findByIdAndUpdate(id, data, {new: true});
}

//delete
const deleteEmployee= async(id, data)=>{
return await Employee.findByIdAndDelete(id, data, {new: true});
}


const getEmployee = async (page, limit) => {

    return await Employee.find()
        .skip((page - 1) * limit)
        .limit(limit);

};


//findOne
const getOneEmployee=async(name)=>{
return await Employee.findOne({name});
};




module.exports = { registerEmployee, getEmployees, getEmployeeById, salaryLowToHigh, salaryHighToLow, firstThreeEmployee, 
  updateEmployee, deleteEmployee, getEmployee, getOneEmployee, login};


