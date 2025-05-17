const mongoose=require('mongoose');

const connectDB=async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/React-Auth');
        console.log('mongodb connected');
        
    } catch (error) {
        console.error(`monodb connection failed : ${error.message}`);
        
    }
}

module.exports=connectDB;