const express=require("express")
const mongoose=require("mongoose")
const router=require("./routes/book-routes")
const cors=require("cors")
const app=express();


// middleware
app.use(express.json());
app.use(cors());
app.use("/books",router)



mongoose.connect("mongodb+srv://sarang:sarang@cluster0.jqdynvy.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("connected to database"))
.then(()=>{
    app.listen(5000)
})
.catch((err)=>console.log(err))