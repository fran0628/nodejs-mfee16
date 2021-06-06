const http = require("http"); //無需install 是內建的
//createServer (Listener)
//處裡連線 req請求 res回覆請求
const server = http.createServer((req,res) => {
    console.log("連線了");


    res.statusCode = 200; //2xx 3xx 4xx 5xx 
    // res.write("hello nodejs server.js");
    res.setHeader("Content-Type","text/plain;charset=UTF-8");
    
    switch (req.url){
        case "/":
        res.end("hello~~~跑起來 step1");
        break;
        case "/test":
        res.end("this is a test page step2");
        break;
        case "/about":
        res.end("this is about US");
        break;
        default:
        res.writeHead(404);
        res.end("OOPS, NOT FOUND");
    }
});

server.listen(3000,() => {
    console.log("跑起來 3000 port")
});

//PHP 搭配web server 
//NodeJS 直接開發個 web server