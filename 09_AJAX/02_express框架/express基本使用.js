//npm包管理工具
//初始化： npm init --yes
//安装： npm i express
//运行脚本 右键终端打开： node express基本使用.js
//停止脚本： ctrl c 
//nodemon自动重启工具： https://www.npmjs.com/package/nodemon
//安装： npm install -g nodemon
//使用nodemon启动脚本： nodemon server.js
//报错 “Running scripts is disabled on this system”： set-executionpolicy remotesigned

//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/', (request, response)=>{
    //设置响应
    response.send('HELLO EXPRESS');
});

//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});
