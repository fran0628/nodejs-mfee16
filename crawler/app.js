// const axios = require('axios');

// axios 
//     .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20210523&stockNo=2610")
//     .then(function (response){
//         console.log(response);
//         // if(response.data.start === 'ok'){
//         //     console.log(response.data.date);
//         //     console.log(response.data.title);
//         // }
//     });

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20210523&stockNo=2610')
  .then(function (response) {
    // handle success
    console.log(response);
  });
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });