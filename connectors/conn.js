

const mongoose=require('mongoose');


const connectDatabase=()=>{
mongoose.connect(process.env.MONGO_URI,()=>{
    console.log("connected to mongo")
}) 
}
module.exports=connectDatabase