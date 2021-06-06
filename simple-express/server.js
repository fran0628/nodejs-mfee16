const express = require("express"); //導入express package

let app = express(); //利用express 建立一個 exp applicaiton app

app.use(function (req, res ,next){
    let current = new Date();
    console.log (`visitor is here ${current}`);
    next();
})

app.get("/",function (req,res) {
    res.send("hello express");
});

//express由上而下執行,找到就停住
app.get("/about",function (req,res) {
    res.send("hello about express");
});

app.get("/test",function (req,res) {
    res.send("hello test express");
});

app.listen(3000, () =>{
    console.log(`running In port 3000`);
});