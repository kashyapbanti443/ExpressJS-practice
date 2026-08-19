
const userService = require("../services/userService");

// User registration


const registerUser = async(req, res) =>{

    try{
        const user= await userService.registerUser(req.body);
        
        res.status(201).json({message: 
            "User Register Successfull", user});
    }
    catch(error){

        res.status(404).json({message: 
            error.message});
    }
}


//login

const login = async(req, res)=>{

    try{

        const result= await userService.login(req.body);
        if(!result.success){

            return res.status(401).json({message: result.message});
        }
        res.status(200).json(result);
    }
    catch(error){

        res.status(500).json({message: error.message});
    };
};

//get method

const getUser= async (req, res)=>{

    try{
const user = await userService.getUser(req.body);
res.json(user);

    }

    catch(error){

        res.json({message: error.message});
    }
}



//getuserById


const getUserById= async(req, res)=> {

    try{

        const user= await userService.getUserById(req.params.id);
        res.json(user);
    }

    catch(error){

        res.json({message: "User Not Found"});
    }
}


//put

const updateUser = async(Req, res) => {

    try{

        const user = await userService.updateUser(req.params.id, req.body);

        res.status(201).json(user);
    }

    catch(error){

        res.status(402).json({message: "User Not Found"});
    }
}


const deleteUser = async (req, res) => {

    try {

        const user = await userService.deleteUser(req.params.id);

        if (!user) {

            return res.status(404).json({

                message: "User Not Found"

            });

        }

        res.status(200).json({

            message: "User Deleted Successfully",

            user

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};




module.exports= {registerUser,login, deleteUser, getUser, updateUser, getUserById};




