const axios = require("axios");
const fs = require("fs"); // fs=file system
const moment = require("moment");  // 抓每天的日期

function readFilePromise() {
return new Promise((resolve, reject) => {
    fs.readFile("stock.txt", "utf8", (err, data) => {
        if (err){
        reject(err);
        }
        resolve(data);
    });
});
}

//async function 
//try catch
(async function () {
    try {
      // await 回來就是 resolve
      let stockCode = await readFilePromise();
      let response = await axios.get(
        "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
        {
          params: {
            response: "json",
            date: moment().format("YYYYMMDD"),
            stockNo: stockCode,
          },
        }
      );
      if (response.data.stat === "OK") {
        console.log(response.data.date);
        console.log(response.data.title);
      } else {
        
      }
    } catch (err) {
      console.error(err);
      
    }
  })();
