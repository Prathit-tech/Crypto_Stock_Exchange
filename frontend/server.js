const express = require('express');
const App = express();

const Web3 = require('web3');
App.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
    console.log(__dirname);
})

App.listen(3000,function(req,res){
    console.log("Running");
})