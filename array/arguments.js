/*
 * @Author: yeah
 * @Date: 2020-06-04 11:34:38
 * @LastEditTime: 2020-06-04 11:53:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yeah\array\arguments.js
 */ 
// arguments 类数组

// 类数组转换为数组
// 1.Array.prototype.slice.call(arguments);
// ArrayBuffer.prototype.mySlice = function(start = 0, end){
//     const array = this;
//     const end = end==="undefined"?array.length:end;
//     const resArray = [];
//     if(array.length === 0) return resArray;
//     for(var i = start;i<end;i++){
//         resArray.push(array[index]);
//     }
//     return resArray;
// }
// 2.Array.from(arguments)
// 3.扩展运算符：let args = [...arguments]
