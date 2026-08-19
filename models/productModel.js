const mongoose= require("mongoose");

const productShcema= new mongoose.Schema({
id:{
type: Number,
required: true
},
name:{
type: String,
required: true

},
category:{
type: String,
required: true
},
price:{
type: Number,
required: true
}
});

const Product= mongoose.model("Product", productShcema);

module.exports= Product;