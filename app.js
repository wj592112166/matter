// 1.下载  引入
const express = require('express');
// 2.application 应用
const app = express();

// 一个特殊的路由方法
// app.all('/list', (req, res, next) => {
//     console.log('all匹配');
//     // res.end('all匹配');
//     next();
// });
// app.get('/list', (req, res, next) => {
//     // console.log('Hello get　list');
//     // 将控制权交给下一个同名路由
//     // next('route');
    
// }, (req, res) => {
//     console.log('Hello1 get1　list1');
//     res.send('Hello1 get1　list1');
// });
// app.get('/list', (req, res) => {
//     // console.log('Hello2 get2　list2');
//     // res.download();// 提示下载文件

//     // 重新定向请求
//     res.redirect('/src');
//     // res.status(400).send('404');
// });
// app.get('/src', (req, res) => {
//     console.log('address is /src');
//     res.end('address is /src');
// });
// const ck1 = (req, res, next) => {
//     console.log('111111');
//     next();
// };
// const ck2 = (req, res, next) => {
//     console.log('222222222');
//     next();
// };
// const ck3 = (req, res, next) => {
//     console.log('3333333');
//     next();
// };
// app.get('/', [ck1, ck2, ck3], (req, res) => {
//     res.end('end');
// });

// app.get('/', (req, res) => {
//     res.end(fs.readFileSync('./index.html'));
// });
// app.post('/list', (req, res) => {
//     req.on('data', chunk => {
//         console.log(chunk.toString());
//     });
//     res.end('hello list');
// });

// 创建路由路径的链式路由句柄
// app.route('/list')
//     .get((req, res) => {
//         console.log(req.url);
//         res.end(fs.readFileSync('./index.html'));
//     })
//     .post((req, res) => {
//         console.log('post');
//         res.end('post');
//     });
// 创建路由路径的链式路由句柄 定义一个路径的 拆分多种请求方式
// const router = express.Router();
// router.get('/list', (req, res) => {
//     res.end('/list');
// });
// // 挂载至应用
// app.use('/', router);


app.use('/list', function (req, res) {
    res.end('use');
});

app.listen(8080);
