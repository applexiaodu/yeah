/*
 * @Author: yeah
 * @Date: 2020-06-04 11:52:50
 * @LastEditTime: 2020-06-08 14:45:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yeah\array\turn.js
 */ 
// 字符串转数组 （字符串也是iterator）
// Object.values("asdf"); // ['a', 's', 'd', 'f']
// Array.from("asdf")
// [...."asdf"]
// "asdf".split("")
// [].slice.call("asdf")
// Reflect.apply([].slice, "asdf", [])

// 对象转数组
// Object.keys(),Object.values(),Object.entries();

// Set和Map转数组
// set可以看做key和value相同的Map，Map转数组还是利用：map.keys(),map.values(),map.entries()
// Map这三个接口返回的是iterator，而不是数组。
// Array.from和扩展运算符可以将iterator和类数组转换成数组
// Set对象类似于数组，且成员的值都是唯一的
// Map对象是键值对集合，和JSON对象类似，但是key不仅可以是字符串还可以是对象
// Set: forEach、add、clear、constructor、delete、entries、keys、size、values、
//     hasOwnProperty、isPrototypeOf、propertyIsEnumerable、toLocalString、toString、valueOf、__proto__
// Map：forEach、set、clear、constructor、delete、entries、keys、get、has、size、values、
//     hasOwnProperty、propertyIsEnumerable、isPrototypeOf、toLocalString、toString、valueOf、__proto__