const mongoose=require('mongoose');
const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlparser:true,
            useUnifiedTopology:true,

        });
        console.log('MongoDB  est connecté avec succes');
    }catch(error){
        console.error('Erreur de connexion MongoDB:',error.message);
        process.exit(1)
    }
};
module.exports=connectDB;