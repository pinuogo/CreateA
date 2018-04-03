var http =require('http');
// 加载一个【http】模块，负责创建WEB服务器及处理HTTP相关任务等。
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello Node.js\n');
})
server.listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
//用【createServer】创建WEB服务器
//用【listen】让服务器在1337端口监听请求