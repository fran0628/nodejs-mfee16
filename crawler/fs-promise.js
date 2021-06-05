const axios = require("axios");
//引入promise版本的fs 新版本才有的
const fs = require("fs/promises"); // fs=file system
const moment = require("moment"); // 抓每天的日期


// function readFilePromise() {
// return new Promise((resolve, reject) => {
//     fs.readFile("stock.txt", "utf8", (err, data) => {
//         if (err){
//         reject(err);
//         }
//         resolve(data);
//     });
// });
// }

// 因為是promise版本
fs.readFile("stock.txt", "utf8")
.then((stockCode) => {
    console.log("stockCode: ", stockCode);
    return axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
        params: {
        response: "json",
        date:"20210530",
        stockNo: stockCode,
        },
    });
})
.then((response)=>{
    if (response.data.stat === "OK") {
        console.log(response.data.date);
        console.log(response.data.title);
    }
})
.catch((err) =>{
    console.error(err);
});