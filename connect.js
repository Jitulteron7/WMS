const mongoose=require("mongoose");

const connectDB=()=>{
    let url=process.env.MONGO_URL;
    if(url=="local"||url==""||!url){
        url="mongodb://localhost:27017/name_it"
        console.log("Connected to local mongodb at port 27017");
    }
    mongoose.connect(url,{
        useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err)=>{
            if(err)console.log(err);
            else console.log("Mongo Database Connected");
        })
        
}

module.exports=connectDB;