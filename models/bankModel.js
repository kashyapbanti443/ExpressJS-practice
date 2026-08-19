// const mongoose= require("mongoose");

// const BankSchema= new mongoose.Schema({

// name:{

//     type: String,
//     required: true
// },
// email:{

//     type: String,
//     required: true,
//     unique:true
// },

// phone:{

//     type: Number,
//     required: true,
//     unique:true
// },
// accountNumber:{
//         type:String,
//         required:true,
//         unique:true
//     },

//      balance:{
//         type:Number,
//         default:0
//     },
//  password:{
//         type:String,
//         required:true
//     }

// });

// const Bank= mongoose.model("Bank", BankSchema);

// module.exports= Bank;


const mongoose= require("mongoose");

const BankSchema= mongoose.Schema({

name: {
type: String,
required: true

},

email: {
type: String,
required: true,
unique: true

},

phone:{ 
    type: Number,
    required: true,
    unique: true
},

accountNumber:{

    type: String,
    required: true,
    unique: true
},

balance:{

    type: Number,
    default: 0
},

password:{

    type: String,
    required: true
}


});


const Bank= mongoose.model("Bank", BankSchema);

module.exports= Bank;