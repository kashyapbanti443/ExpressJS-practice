


const express= require("express");
const router= express.Router();


//const {getEmployees, getProductById} = require("../controllers/employeeController");

// router.get("/", getEmployees);
// router.get("/:id", getEmployeeById);

// router.post("/", addEmployee);
// router.put("/:id", updateEmployee);
// router.delete("/:id", deleteEmployee);


const {login, registerEmployee, getEmployees, getEmployeeById, salaryLowToHigh, salaryHighToLow, firstThreeEmployee, deleteEmployee,
    updateEmployee, getEmployee, getOneEmployee}= require("../controllers/employeeController");


    router.post("/register", registerEmployee);
//router.post("/", createEmployee);
router.get("/", getEmployees);

router.post("/login", login)
router.get("/salary/asc", salaryLowToHigh);
router.get("/salary/dsc", salaryHighToLow)
router.get("/:id", getEmployeeById)
router.get("/employees/:id", getEmployeeById);
router.get("/limit/3", firstThreeEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
router.get("/", getEmployee);
router.get("/:name", getOneEmployee)


//router.post("/register", registerUser);


module.exports=router;

