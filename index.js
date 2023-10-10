import express from "express";
import bodyParser from "body-parser";

const app = express();
app.set("view engine","ejs");

app.use(express.static("public"));

app.use((req,res,next)=>{
    next();
});

app.use(bodyParser.urlencoded({
    extended:true
}));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/submit-details",(req,res)=>{
    console.log(req.body);
    res.render("index");
});

const port = 3000;
app.listen(port,()=>{
    console.log("Listening at localhost:3000");
});