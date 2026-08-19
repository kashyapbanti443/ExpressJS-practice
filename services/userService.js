const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Register User

const registerUser = async(data) =>{

    const hashedPassword= await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    return await User.create(data);
}


const login = async(data)=> {

    const user= await User.findOne({email: data.email});
    if(!user){

        return{
            success: false,
            message: "User Not Found"
        };
    };

    const match = await bcrypt.compare(data.password, user.password);
    if(!match){

        return{
            success: false,
            message: "Password Invalid"
        };
    };

    const token= jwt.sign(

        {
            id: user._id,
            email: user.email,
            role: user.role
        },

        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    return{

        success: true,
        message: "User Login Success", user, token
    };
};

// // Get All Users

const getUser = async () => {

    return await User.find();
}

// Get User By ID

const getUserById= async(id) => {

    return await User.findById(id);
}

//put update
// const updateUser= async(id, data)=>{

//     return await User.findByIdAndUpdate(id, data,{new: true });
// }

const updateUser= async(id, data)=> {

    return await User.findByIdAndUpdate(id, data, {new: true});
}

// Delete User
const deleteUser = async (id) => {

    return await User.findByIdAndDelete(id);

};

module.exports = {
    registerUser,
    login,
    getUser,
    getUserById,
    updateUser,
    deleteUser
};


