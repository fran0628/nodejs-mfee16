// routes/stock.js 

const express = require("express");
const router = express.Router(); 
const connection = require("../utils/db");
//可把router想成小的 獨立的應用

//回給你router物件 
// let app = express();  express的application 獨立小型應用 

router.get("/", async (req, res) => {
    let queryResults = await connection.queryAsync("SELECT * FROM stock;")
    res.render("stock/list" ,{
        stocks: queryResults,
    });
});

router.get("/:stockCode", async (req, res, next) => {
    let stock = await connection.queryAsync(
        "SELECT * FROM stock WHERE stock_id= ?;",
        req.params.stockCode
        
    );
    if (stock.length === 0) {
     //throw new Errow ("查無代碼");
     next();
    } stock = stock[0];
});
module.exports = router;
// 基本router該有的樣子

