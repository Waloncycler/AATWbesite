const express = require('express');
const path = require('path');
const app = express();

// 设置静态文件目录
app.use(express.static(path.join('S:', 'Repo', 'pannellum', 'aatExamples', 'sources')));

// 跨域处理
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // 允许所有源
    next();
  });

// 所有请求都发送到 equirectangular.html
app.get('*', (req, res) => {
    res.sendFile(path.join('S:', 'Repo', 'pannellum', 'aatExamples', 'equirectangular.html'));
});

// 监听端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});