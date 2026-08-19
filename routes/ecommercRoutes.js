const express=require("express");
const router= express.Router();
router.use(express.json());


const { getProducts, getProductById, addProduct, updateProduct, deletedProduct} = require("../controllers/productController");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deletedProduct);

module.exports=router;

