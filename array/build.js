/*
 * @Author: yeah
 * @Date: 2020-06-05 14:33:07
 * @LastEditTime: 2020-06-08 10:01:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yeah\array\build.js
 */
// Array.from()是个高阶函数，可以接受一个函数来处理每个元素
// const arr = Array.from({ length: 10 }, (_, index) => index + 1);// [1,2,3,4,5,6,7,8,9,10]
// Array.from({length: 26}, (_, index)=>String.fromCodePoint("a".codePointAt(0)+index))
// ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Array, new Arraay(), Array.of的区别
// Array(2) // [empty*2] undefined
// Array(2,3) // [2,3]
// new Array(2) // [empty*2]
// new Array(2,1) // [2,1]
// Array.of(2) // [2]

// Array(n),Array.from({length: n})的区别
// Array.from({length: 4}) // [undefined, undefined, undefined, undefined]
// Array(4) // [empty*4]
// 空元素是无法被forEach，map等函数遍历到的

// 将数组中的内容拼接成字符串
// new URLSearchParams({name: "asdf", age: "30"}).toString() // name=asdf&age=30

// forEach 和 for 循环有什么区别
// forEach不能提前退出循环，for循环可以，直接break
// forEach接受的函数时async没法await的，也就是每次执行的async函数之间是并发的，而for循环可以使用await让async函数之间是同步的
// forEach是函数式风格而for循环是命令式风格