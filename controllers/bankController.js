
const Bank= require("../models/bankModel");

const bankService= require("../services/bankService");


const registerUser= async(req, res)=>{

    try{

    const bank= await bankService.registerUser(req.body);
    res.json(bank);
    }
    catch(error){

        res.json({mesage:"User Data Not Allow"})
    }
}

//get by
const getUser= async(req, res)=>{

    try{

const bank= await bankService.getUser();
res.json(bank);

    }
    catch(error){

        res.json({message: error.error, message: error});
    }
}

//getbyid
const getUserById= async(req, res)=>{

try{

    const user= await bankService.getUserById(req.params.id);

    res.json(user);
}

catch(error){

    res.json({message: error.error, message: error})
}
}

//update ById
const updateUSer=async(req, res)=>{

    try{

        const user= await bankService.updateUSer(req.params.id, req.body);
        res.json(user);
    }
    catch(error){

        res.json({message: error.error, Error: error});
    }
}

//delete
const deleteUser= async(req, res)=>{

    try{

const user= await bankService.deleteUser(req.params.id, req.body);
res.json(user);

    }

    catch(error){

        res.json({message: error.error, Error: error});
    }
}

//first 3 user show

const firstThreeUser=async(req, res)=>{


    try{

        const page= Number(req.query.page) || 1;
        const limit= Number(req.query.limit) || 3;

        const user= await bankService.firstThreeUser(page, limit);
        res.json(user);
    }

    catch(error){

        res.json({message: error.error, Error: error});
    }
}







module.exports= {registerUser, getUser, getUserById, updateUSer, deleteUser, firstThreeUser};