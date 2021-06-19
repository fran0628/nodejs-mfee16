const connection = require("./utils/db");
const express = require("express"); //導入express package
// const { connect } = require("../myweb/routes");
let app = express(); //利用express 建立一個 exp applicaiton app

//可以指定一個或多個目錄是靜態資源目錄
//自動幫你為public裡面的檔案建立路由
app.use(express.static("public"));
app.use("/admin",express.static("public-admin"));

app.set("views","views");
app.set("view engine", "pug");

app.use(function(req, res, next){
    console.log("無用 Middleware");
    next();
});

app.use(function (req, res, next){
    let current = new Date();
    console.log (`visitor is here ${current}`);
    next();
});

let stockRouter = require("./routes/stock"); //這邊才跟目錄有關
app.use("/stock", stockRouter);

app.get("/",function (req,res) {
    //res.send("hello express");
    res.render("index");
});

//express由上而下執行,找到就停住
app.get("/about",function (req,res,next) {
    //res.send("hello about express");
    res.render("about");
});

app.get("/test",function (req,res) {
    res.send("hello test express");
});

app.use(function (req, res, next){
    res.status(404);
    res.render("404");
});

app.use(function (err, req, res, next){
    console.log(err.message);
    res.status(500);
    res.send("500 - Internal Server Error 請洽系統管理員");
});

app.listen(3000, async () =>{
    // web server開始的時候 去連線資料庫
    await connection.connectAsync();
    
    console.log(`running In port 3000`);
});
