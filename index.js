const express = require("express");
const bodyParser = require("body-parser");
const todayDate = require(__dirname + "/date.js");
let newItems = ["Don't panic","Keep calm","Bring a towel"];
let workItems = ["Another coffee"];

const app = express();

// EJS

app.set('view engine','ejs');

// Public folder with static files

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
// Root route

app.get("/",function(req,res){
    let currentDate = todayDate();
    res.render('toDoList',{listTitle:currentDate,newTasks:newItems});
});

app.post("/",function(req,res){
    if (req.body.button === "Work"){
        workItems.push(req.body.newTask);
        res.redirect("/work");
    } else {
        newItems.push(req.body.newTask);
        res.redirect("/");
    }
});

// Work route

app.get("/work",function(req,res){
    res.render('toDoList',{listTitle:"Work",newTasks:workItems});
});

app.post("/work",function(req,res){
    res.redirect("/work");
});

// Server

app.listen(3000,function(){
    console.log("Server started on Port 3000");
});