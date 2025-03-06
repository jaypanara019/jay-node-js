const express = require("express");
const port = 8022;
const app = express();
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    let studentArr = [
        {
            name : "Ashish",
            email : "ashish@gmail.com",
            age : 18,
            phone : 9595959595,
        },
        {
            name : "asdf",
            email : "ashish@gmail.com",
            age : 19,
            phone : 9595959595,
        },
        {
            name : "fda",
            email : "ashish@gmail.com",
            age : 20,
            phone : 9595959595,
        },
    ]
    return res.render("index",{
        studentArr
    });
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log("Server running successfully.");
    
})