const express = require("express");
const cors =require("cors");
const bodyParser  = require("body-parser");
const router = require("./routes/users.route");
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(router);





//* home route
app.get("/",(req,res)=>{
res.sendFile(__dirname + '/views/index.html')
});
//* inavalid route
app.use((req,res,next)=>{
res.status(404).json({
    message:"not Found"
})
});

//* server error
app.use((error,req,res,next)=>{
    res.status(500).json({
        message:"Something went Wrong "
    })
    })
module.exports=app



