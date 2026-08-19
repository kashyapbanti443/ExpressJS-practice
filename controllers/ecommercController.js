const express = require("express");

const products= [

    {id:1, name:"Tshirt", price:800},
    {id:2, name: "Pent", price: 1200},
    {id:3, name: "shoes", price: 2200}
];

const getProducts= (req, res)=>{

    res.json(products);
};
//get by id

const getProductById= (req, res)=>{

    const id= Number(req.params.id);
    const product= products.find((p)=>p.id===id);

    if(!product){

        res.status(404).json({message:"product not found"});
    }
    res.json(product);
};

//post
const addProduct= (req, res)=>{
const newProduct= req.body;

products.push(newProduct);

res.status(200).json({message:"New Product Added successfully", product: newProduct});

};
//put

const updateProduct= (req, res)=>{

const id= Number(req.params.id);
const product= products.find((p)=>p.id===id);

if(!product){

    res.status(404).json({product:"Product not found"});
}

product.id= req.body.id,
product.name= req.body.name,
product.price= req.body.price;

res.status(200).json({message:"Product updated successfully", product});

};
//delete

const deletedProduct= (req, res)=>{

    const id= Number(req.params.id);
    const index= products.findIndex((p)=>p.id===id);

    if(index === -1){

        res.status(404).json({message:"product not found"});
    };
products.splice(index,1);
res.status(200).json({message:"product delete successfully", });
    
};


module.exports={getProducts, getProductById, addProduct, updateProduct, deletedProduct};