const axios = require('axios');

axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20210523&stockNo=2610')
  .then(function (response) {
    // handle success
    console.log(response);
  })
   //.then(function (response) {
   //  if (response.data.stat === "OK") {
   //     console.log(response.data.date);
   //     console.log(response.data.title);

  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });