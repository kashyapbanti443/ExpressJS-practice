// const express= require("express");

// let products = [
//   { id: 1, name: "Charger", price: 1500 },
//   { id: 2, name: "Mobile", price: 30000 }
// ];
// //get method
// const getProducts= (req, res)=>{
// res.json(products);

// }

// const getProductById= (req, res)=>{

//     const id= Number(req.params.id);
//     const product= products.find((p)=>p.id===id);

//     if(!product){
// res.json({message:"product not found"});

//     }
//     res.json(product);
// };
// //post

// const addProduct= (req, res)=>{
// const newProduct= req.body;
// products.push(newProduct);
// res.json({message:"product added successfully", product: newProduct});

// };
// //put

// const updateProduct= (req, res)=>{
// const id= Number(req.params.id);
// const product= products.find((p)=>p.id===id);

// if(!product){
// res.json({message:"product not found"});

// }

// products.id= req.body.id,
// products.name= req.body.name,
// products.price= req.body.price;

// res.json({message:"product update successfully", product});
// };
// //delete

// const deletedProduct= (req, res)=>{
// const id= Number(req.params.id);
// const index= products.findIndex((p)=>p.id===id);

// if(index === -1){
//     return res.json({message:"Product not found"});
// }
// products.splice(index, 1);
// res.json({message:"delet product successfully"})

// }

// module.exports= {getProducts, getProductById, addProduct, updateProduct, deletedProduct};


 const Product = require("../models/productModel");
const productService= require("../services/productService");



const createProduct=async(req, res)=>{

    try{

        const product= await productService.createProduct(req.body);
        res.json(product);
    }
    catch(error){

        res.json({message: "Product Not Found"});
    }
}

//get all show
// const getProduct= async(req, res)=>{
// try{

//     const product= await productService.getProduct();
//     res.json(product);
// }

// catch(error){

//     res.json({message:"Products not found"});
// }
// }


const getProduct=async(req, res)=>{

    try{
const product=await productService.getProduct();
res.json(product);

    }
catch(error){

    res.json({message: "Products Not Found"})
}

}


//get by id

const getProductById=async(req, res)=>{

    try{

        const product= await productService.getProductById(req.params.id);

        res.json(product);
    }

    catch(error){

        res.json({message: "Product Not Found"});
    }
}



//put
// const updateProduct= async(req, res)=>{

//     try{

// const product= await productService.updateProduct(req.params.id, req.body);
// res.status(201).json(product);

//     }
//     catch(error){

//         res.status(500).json({
//         message: error.message
//     });
//     }
// }

const updateProduct=async(req, res)=>{

    try{

const product=await productService.updateProduct(req.params.id, req.body);
res.json(product);

    }
    catch(error){

        res.json({message: error.message})
    }
}


//delete
const deletedProduct=async(req, res)=>{

try{

    const product= await productService.deletedProduct(req.params.id, req.body);
    res.status(200).json(product);
}

catch(error){

res.status(500).json({
        message: error.message
    });

}
}

//low to high price
// const salaryLowToHigh=async(req, res)=>{

//     const product= await productService.salaryLowToHigh();
//     res.json(product);
// }


const salaryLowToHigh=async(req, res)=>{

    const product= await productService.salaryLowToHigh();
    res.json(product);
}

//high tp low
const salaryHighToLow= async(req, res)=>{

    const product= await productService.salaryHighToLow();
    res.json(product);
}

//only 3

const firstThreeProduct= async(req, res)=>{
const product= await productService.firstThreeProduct();

res.json(product);

}



module.exports= {createProduct, getProduct, getProductById, updateProduct, deletedProduct, salaryLowToHigh, 
    salaryHighToLow, firstThreeProduct};



