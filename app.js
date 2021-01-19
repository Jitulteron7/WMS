require("dotenv").config();
const express=require("express");
const app=express();
const PORT=process.env.PORT||5000;
const routes=require("./routes/index");
const session=require("express-session");
const cookieParser=require("cookie-parser");
const db=require("./connect");

app.use(express.json());
app.use(cookieParser("hack_it"));
app.use(session({
    secret:"hack_it",
    cookie:{
        maxAge:24*60*60*1000
    },
    resave:false,
    saveUninitialized:false,
}))
// routes
app.use("/",routes);
// db
db();

app.listen(PORT,()=>{
    if(PORT==5000) console.log("connected to PORT "+PORT);
    else console.log("conneted");
})