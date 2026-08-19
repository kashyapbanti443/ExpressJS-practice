// const express= require("express");
// const router= express.Router();
// router.use(express.json());
// const products= [
// {id: 1, name: "Mobile", price: "20000"},
// {id: 2, name:"Laptpn", price: "50000"},
// {id: 3, name:"watch", price: "1999"}

// ];

// router.get("/", (req, res)=>{

// res.json(products);

// });
// router.get("/:id", (req, res)=>{
// const id= Number(req.params.id);
// const product= products.find((p)=>p.id=== id);
// if(!product){
// return res.status(404).json({message:"Produt not found"});

// }
// res.json(product);
// });

// router.post("/", (req, res)=>{

//     const id= Number(req.params.id);
//     const newProduct= req.body;

// res.status(201).json({message:"New Product added successfull", newProduct});
// });
// //put

// router.put("/:id", (req, res)=>{

// const id= Number(req.params.id);
// const product= products.find((p)=>p.id=== id);

// if(!product){
// return res.json({message:"product not found"});

// }
// products.id= req.body.id,
// product.name= req.body.name,
// product.price= req.body.price;

// res.json({message:"product update success", product});
// });

// //delete

// router.delete("/:id", (req, res)=>{

//     const id= Number(req.params.id);
//     const index= products.findIndex((p)=>p.id=== id);

//     if(index === -1){

//         return res.json({message:"product not found",});
//     }
// const deletedProduct=products[index];

// products.splice(index, 1);
// res.json({message:"product delete success", product:deletedProduct});

// });


// module.exports = router;



// const express= require("express");
// const router= express.Router();
// router.use(express.json());
// const {getProducts, getProductById, addProduct, updateProduct, deletedProduct} = require("../controllers/productController");
// router.get("/", getProducts);

// router.get("/:id", getProductById);
// router.post("/", addProduct);
// router.put("/:id", updateProduct);
// router.delete("/:id", deletedProduct);
// module.exports=router;



const express= require("express");
const router= express.Router();
router.use(express.json());

const {createProduct, getProduct, getProductById, updateProduct, deletedProduct, salaryLowToHigh, 
    salaryHighToLow, firstThreeProduct}= require("../controllers/productController");



router.post("/", createProduct);
router.get("/",getProduct );
router.get("/salary/asc", salaryLowToHigh);
router.get("/salary/dsc", salaryHighToLow);
router.get("/:id", getProductById)
router.put("/:id", updateProduct);
router.delete("/:id", deletedProduct);
router.get("/limit/3", firstThreeProduct);







module.exports= router;



