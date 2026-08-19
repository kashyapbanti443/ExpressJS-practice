

 
 const Employee = require("../models/employeeModel");
const employeeService = require("../services/employeeService");

// const createEmployee=async(req, res)=>{

//   try{

//     const employee= await employeeService.createEmployee(req.body);
//     res.status(201).json({message:"Employee created"})
//   }
//   catch(error){

//     res.status(500).json({message:"Something went wrong"});
//   }
// }

//register

const registerEmployee=async(req, res)=>{

  try{

  
  const employee=await employeeService.registerEmployee(req.body);

  res.json(employee);
}
catch(error){

  res.json({message: "Employee Register Not Found"});
}
}

//login

const login=async(req, res)=>{

try{

const result=await employeeService.login(req.body);

if(!result.success){

  return res.status(401).json({message: "result.message"});
}
res.status(200).json(result);
}
catch(error){

console.log(error);
  res.status(500).json({
            message: error.message
        });
}

};



//get 

const getEmployees= async(req, res)=>{

  try{

    const employee= await employeeService.getEmployees();
    res.json(
      employee  );
  }
  catch(error){

res
.json({message:"Something went wrong"});
  }
}
//get one employee
const getEmployeeById=async(req, res)=>{
  try{
const employee= await employeeService.getEmployeeById(req.params.id);
res.json(employee);
  }
  catch(error){

    res.json(error);
  }


}
//salary low to high
const salaryLowToHigh=async(req, res)=>{

    const employee= await employeeService.salaryLowToHigh();
    res.json(employee);
  }
  
// high to low

const salaryHighToLow= async(req, res)=>{
const employee=await employeeService.salaryHighToLow();
res.json(employee);
} 

//3 employee
const firstThreeEmployee= async(req, res)=>{

  const employee=await employeeService.firstThreeEmployee();
  res.json(employee);
}


//put
const updateEmployee= async(req, res)=>{

  try{
console.log(req.body);
    const employee= await employeeService.updateEmployee(req.params.id, req.body);
    res.status(201).json(employee);
  }
  catch(error){

    res.status(501).json({message: error.message, error: error});
  }
}
//delete
const deleteEmployee= async(req, res)=>{

try{

  const employee= await employeeService.deleteEmployee(req.params.id);
  res.json(employee);
}

catch(error){

  res.json({message: error.message, error:error});
}
}


const getEmployee = async (req, res) => {

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 3;

    const employees = await employeeService.getEmployee(page, limit);

    res.json(employees);

};

//one employee
const getOneEmployee=async(req, res)=>{

  const employee= await employeeService.getOneEmployee(req.params.name);
  if(!employee){

    return res.status(404).json({message:"employee not found"});
  }
res.json(employee);

}




module.exports={registerEmployee, getEmployees, getEmployeeById, salaryLowToHigh, salaryHighToLow, 
  firstThreeEmployee, updateEmployee, deleteEmployee, getEmployee, getOneEmployee, login};

