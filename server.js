const path = require("path");
const express = require("express");
const webpack = require("webpack");
const args = require('process.args')();
const configPath = Object.keys(args.file)[0];
const PORT = 3000;
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-Hot-middleware");
const webpackConfig = require('./webpack.config.js')(configPath, PORT);

const app = express(), DIST_DIR = path.join(__dirname, "build"); // 设置静态访问文件路径
const complier = webpack(webpackConfig);


let devMiddleware = webpackDevMiddleware(complier, {
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },watch: true,
    publicPath: webpackConfig.output.publicPath,
    log: false, // 向控制台显示任何内容 
});

let hotMiddleware = webpackHotMiddleware(complier,{
    log: false,
    heartbeat: 2000
});
app.use(devMiddleware);

app.use(hotMiddleware);


// 这个方法和下边注释的方法作用一样，就是设置访问静态文件的路径
app.use(express.static(DIST_DIR));

app.listen(PORT,function(){
    console.log("成功启动：localhost:"+ PORT);
});