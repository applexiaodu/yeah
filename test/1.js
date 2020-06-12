/*
 * @Author: yeah
 * @Date: 2020-06-03 14:35:02
 * @LastEditTime: 2020-06-11 11:16:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yeah\test\1.js
 */
// var p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Hi,');
//         resolve();
//     }, 500);
// }).then(function() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve('promise fulfilled！');
//             reject('promise rejected！');
//         });
//     })
// }).then(function(data) {
//     console.log(data);
// }, function(error) {
//     console.log(error); 
// });
// Hi,
// promise fulfilled!

// var p1 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 500, 'P1');
// });
// var p2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 400, 'P2');
// });
// Promise.race([p1, p2]).then(function (result) {
//     console.log(result); // 'P2' all: ['p1', 'p2']
// });
// Promise.resolve()

// var thenable = {
//     then(resolve, reject) {
//         reject('出错了');
//     }
// };
// Promise
//     .reject(thenable)
//     .catch(function(e){
//         console.log(e === thenable)
//     })
// true
// -- Promise.reject方法的参数是一个thenable对象，执行后，后面catch方法的
// -- 参数不是reject抛出的‘出错了’这个字符串，而是thenable这个对象。

// 加载图片
// function loadImage(path){
//     return new Promise(function(resolve, reject){
//         const img = new Image();
//         img.onload = resolve;
//         img.onerror = reject;
//         img.src = path;
//     })
// }
// // 封装Ajax
// function Ajax(){
//     var retuqest = new XMLHttpRequest();
//     return new Promise(function(resolve, reject){
//         request.onReadyStateChange = function(){
//             if(request.readyState === 4){
//                 if(request.status === 200){
//                     resolve(request.responseText);
//                 }else{
//                     reject(request.status);
//                 }
//             }
//         };
//         request.open(method, url);
//         request.send(data);
//     });
// }