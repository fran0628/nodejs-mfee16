const http = require("http"); //無需install 是內建的
const { URL } = require("url");
// const fs = require ("fs/promises");
//createServer (Listener)
//處裡連線 req請求 res回覆請求
const server = http.createServer((req,res) => {
    console.log("Status : Connect Successful!");
    console.log(req.url);

    res.statusCode = 200; //2xx 3xx 4xx 5xx 
    // res.write("hello nodejs server.js");
    res.setHeader("Content-Type","text/plain;charset=UTF-8");
    
    switch (req.url){
        case "/":
        res.end("Hello! Welcome step1");
        break;
        case "/test":
        res.end("This is a test page step2");
        break;
        case "/about":
        // let name = url.searchParams.get("name") || "Dear Friend";
        res.end(`This is about US 這是關於我們! ${name} xoxoxo`);
        break;
        default:
        res.writeHead(404);
        res.end("OOPS, THE PAGE IS NOT FOUND!");
    }
});

server.listen(3000,() => {
    console.log("跑起來 3000 port")
});

//PHP 搭配web server 
//NodeJS 直接開發個 web server