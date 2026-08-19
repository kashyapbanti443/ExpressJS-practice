

const bcrypt=require("bcrypt");
const newUser=require("../models/newuserModel");
const jwt=require("jsonwebtoken");



const registerUser=async(data)=>{

    const hashedPassword=await bcrypt.hash(data.password, 10);
    data.password=hashedPassword;
    return await newUser.create(data);
}


//get show all user
const getUser= async()=>{

    const user= await getUser.find();
    return user;
}

//getById

const getUserById=async(id)=>{

    return await newUser.findById(id);
}

//put
const updateUser= async(id, data)=>{

    return await newUser.findByIdAndUpdate(id,data,{
        new: true
    } )
};

//delete
const deleteUser=async(id, data)=>{

    return await newUser.findByIdAndDelete(id, data,
        {new: true});

};

//firstThreeUser show
const firstThreeUser=async(page, limit)=>{

    return await newUser.find().skip((page -1)*limit).limit(limit);
}

//findOne
const getOneUser= async(name)=>{

    return await newUser.findOne({name});
}





module.exports= {registerUser, getUser, getUserById, updateUser, deleteUser, firstThreeUser, getOneUser};


