
const bcrypt= require("bcrypt");

const Bank= require("../models/bankModel");
const { get } = require("mongoose");



const registerUser=async(data)=>{

const hashedPassword= await bcrypt.hash(data.password, 10);

data.password= hashedPassword;
return await Bank.create(data);

}

//all user show getby

const getUser= async()=>{

const user= await Bank.find();
return user;
    
}

//getbyid show user

const getUserById= async(id)=>{

    return await Bank.findById(id);
}


//put
const updateUSer= async(id, data)=>{

return await Bank.findByIdAndUpdate(id, data, {new: true})

}

//delete
const deleteUser= async(id, data)=>{

    return await Bank.findByIdAndDelete(id, data, {new: true});
}

//firstthree user show
const firstThreeUser= async(page, limit)=>{

    return await Bank.find().skip((page -1)*limit).limit(limit);
}




module.exports= {registerUser, getUser, getUserById, updateUSer, deleteUser, firstThreeUser};