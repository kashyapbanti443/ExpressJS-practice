
const newUser=require("../models/newuserModel");
const newuserService= require("../services/newuserService");

//user register

const registerUser=async(req, res)=>{

    try{

        const user=await newuserService.registerUser(req.body);
        res.status(201).json({message: "User Registered Succssfully", user});
    }
catch(error){

    res.status(404).json({message: error.message});
}
}

//get all show users

const getUser=async(req, res)=>{

    try{

        const user= await newuserService.getUser();
        res.json(user);
    }
catch(error){

    res.json({message: "user Not Found"})
}

}

//get BYID

const getUserById=async(req, res)=>{

    try{

const user= await newuserService.getUserById(req.params.id);
res.status().json({message:"User Success", user});

    }
catch(error){

    res.status(404).json({message: "User Not Found"});
}

}

//put
const updateUser=async(req, res)=>{

    try{

        const user=await newuserService.updateUser(req.params.id, req.body);
        res.json(user);
    }
    catch(error){

        res.json({message: "User Not Found"});
    }

}

//delete
const deleteUser=async(req, res)=>{

    try{

        const user=await newuserService.deleteUser(req.params.id, req.body);
        res.json(user);
    }
    catch(error){
        res.json({message: "User Not Found"});
    }
}

//firstThreeUser Show
const firstThreeUser=async(req, res)=>{

    try{
const page=Number(req.query.page) || 1;
const limit= Number(req.query.page) || 3;
        const user= await newuserService.firstThreeUser(page, limit);
        res.json(user);
    }
    catch(error){

        res.json({message: "User page Not Found"});
    }
}

//one user
const getOneUser=async(req, res)=>{

    const user=await newuserService.getOneUser(req.params.id);
    if(!user){

        return res.status(404).json({message: "User Not Found"});
    }
    res.json(user);
}





module.exports= {registerUser, getUser, getUserById, updateUser, deleteUser, firstThreeUser};


