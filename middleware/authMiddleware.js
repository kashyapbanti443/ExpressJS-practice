
// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) =>{

//     try{

//         const authHeader = req.authHeader.authorization;
// if(!authHeader){

//     return res.status(401).json({message: "token missing"});
// }
//     const token= authHeader.splite(" ")[1];
//     console.log(req.headers);
//     console.log(token);


//     const decode= jwt.verify(token, process.env.JWT_SECRET);

//     console.log(decode);
//     req.user= decode;
//     next();
// }
// catch(error){
// return res.status(401).json({message: "Invalid token"});

//     };
// };

// module.exports = {authMiddleware};


const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    try{

        const authHeader = req.headers.authorization;
        if(!authHeader){

            return res.status(401).json({message: "token missing"});
        };

        const token = authHeader.splite(" ")[1];
        console.log(req.headers);
        console.log(token);

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        console.log(decode);
        req.user= decode;

        next();
    }
    catch(error){

        return res.status(401).json({message: "invalid token"});
    }
}

module.exports = {authMiddleware};


