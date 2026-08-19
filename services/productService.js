

const Product= require("../models/productModel");


const createProduct=async(data)=>{

    const product= await Product.create(data);
    return product;
}



const getProduct=async()=>{

    const product=await Product.find();
    return product;
}


const getProductById= async(id)=>{

    return await Product.findById(id);
}



//put
// const updateProduct=async(id, data)=>{
//     return await Product.findByIdAndUpdate(id, data, {new: true});
// }


const updateProduct=async(id, data)=>{

    return await Product.findByIdAndUpdate(id, data, {new: true});
}

// delete
const deletedProduct= async(id, data)=>{

    return await Product.findByIdAndDelete(id, data, {new: true});
}

//low to high

// const salaryLowToHigh=async()=>{

//     return await Product.find().sort({salary: -1});
// }

const salaryLowToHigh=async()=>{

    return await Product.find().sort({salary: -1});
}

//high to low

const salaryHighToLow= async()=>{

    return await Product.find().sort({salary: 1});
}
//only 3 
const firstThreeProduct= async()=>{

    return await Product.find().limit(3);
}





module.exports= {createProduct, getProduct, getProductById, updateProduct, deletedProduct, salaryLowToHigh,
     salaryHighToLow, firstThreeProduct};



     