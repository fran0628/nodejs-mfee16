const axios = require("axios");
const fs = require("fs"); // fs=file system
const moment = require("moment"); // 抓每天的日期
const Promise = require("bluebird");
// console.log(Promise);

// Promise.all();

// function readFilePromise() {
// return new Promise((resolve, reject) => {
//     fs.readFile("stock.txt", "utf-8", (err, data) => {
//         if (err){
//         reject(err);
//         }
//         resolve(data);
//     });
// });
// }

// 方法一: 一個函式一個函式包 用bluebird包callback版本的readfile
const readFileBlue = Promise.promisify(fs.readFile);

//方法二: 把fs所有的function都包成promise
//但是原本的函示名稱後面會被加上Async
//const fsBlue = Promise.promisify(fs.readFile);
//fsBlue readFile 替換成.readFileAsync("stock.txt", "utf-8")

readFileBlue("stock.txt", "utf-8")
.then((stockCode) => {
    console.log("stockCode: ", stockCode);
    return axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
        params: {
        response: "json",
        date: moment,
        stockNo: stockCode,
        },
    });
})
.then((response)=>{
    if (response.data.state === "OK") {
        console.log(response.data.date);
        console.log(response.data.title);
    }
})
.catch((err) =>{
    console.error(err);
});