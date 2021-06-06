const axios = require("axios");
const fs = require("fs/promises");
const moment = require("moment"); // 抓每天的日期
const Promise = require("bluebird");

const mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mysqli',
  });

connection = Promise.promisifyAll(connection); 
//用bluebird把這個connection給promisify

(async function () {
  try{
    await connection.connectAsync();
    // 讀完檔 awaitquery await axios 再用async包起來
    let stockCode = await fs.readFile("stock.txt", "utf-8");
    console.log(`讀到的 stock code : ${stockCode}`);
    let stock = await connection.queryAsync(`SELECT stock_id FROM stock WHERE stock_id = ${stockCode}`) //加上Async都可以變成promise版
    if(stock.length <= 0){
      console.log("Start to query name");
      let response = await axios.get(
        `https://www.twse.com.tw/zh/api/codeQuery?query=${stockCode}`);
        
    
      };
    let answer = (response.data.suggestions.shift());
    let answers = answer.split('\t');
    if(answers.length>1){
      connection.queryAsync(`INSERT INTO stock (stock_id,stock_name) VALUES ('${answers[0]},${answers[1]}');`
      );
      }
} catch (err) {
    console.error(err);
} finally {
  connection.end();
}

})();

// await app.js---------------------------------------------------------------------
// fs.readFile("stock.txt","utf-8")
//   .then((stockCode) => {
//      console.log(`讀到的 stock code : ${stockCode}`);
//      connection.query(`SELECT stock_id FROM stock WHERE stock_id = ${stockCode}`,
//      // line27開始為callback
//      function(err,result){
//         if(err){
//           throw err;
//         }
//         // console.log(result.length); 有查到會是1;沒有則為0
//         if(result.length === 0){
//           return axios.get(
//        `https://www.twse.com.tw/zh/api/codeQuery?query=${stockCode}`);
//         }
//      }); 
//   })
// .then(function (response){
// let answer = (response.data.suggestions.shift());
// let answers = answer.split('\t');
// if(answers.length>1){
//   connection.query(`INSERT INTO stock (stock_id,stock_name) VALUES ('${answers[0]},${answers[1]}');`,
//   function(err,result){
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//   });
//     } else{
//       throw "查不到名稱";
//     }
// })
//   .catch((err) => {
//     console.error(err);
//   }) 
//   .finally(()=>{
//     connection.end();
//   }); //關閉資料庫寫在最後面


// original app.js-----------------------------------------------------
// fs.readFile("stock.txt", "utf8", (err, data) => {
//   if (err) {
//     return console.error("讀檔錯誤", err);
//   }
//   // console.log(`讀到的 stock code: ${data}`);
//   axios
//     .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
//       params: {
//         response: "json",
//         date: moment().format("YYYYMMDD"),
//         stockNo: data,
//       },
//     })
//     .then(function (response) {
//       if (response.data.stat === "OK") {
//         console.log(response.data.date);
//         console.log(response.data.title);
//       }
//     });
// });