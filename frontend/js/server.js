const express = require('express');
const App = express();

App.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

App.listen(3000,function(req,res){
    console.log("Running");
})