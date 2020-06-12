/*
 * @Author: yeah
 * @Date: 2020-06-10 09:35:23
 * @LastEditTime: 2020-06-10 10:28:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yeah\queue\priorityQueue.js
 */
function Queue() {
    this.container = [];
}
Queue.property = {
    constructor: Queue,
    enter(element, priority = 0) {
        let obj = {
            value: element,
            priority
        }
        if (priority === 0) {
            this.container.push(element)
        }
        // 指定优先级，默认从最后一项依次比较
        let flag = false; // 记录有没有比当前项大的，false没有，true有
        for (let i = 0; i < this.container.length; i++) {
            let item = this.container[i];
            if (item.priority >= priority) {
                // 插入到比较像的后面
                this.container.splice(i + 1, 0, obj);
                this.flag = true;
                break;
            }
            !flag ? this.container.push(obj) : "";
        }
    },
    leave() {
        if (this.container.length === 0) return;
        return this.container.shift();
    },
    size() {
        return this.contianer.length;
    },
    value() {
        return JSON.parse(JSON.stringify(this.container))
    }
}

// 从服务器获取的是文件流（进制编码的内容）
// 1、浏览器首先会把16进制的字节信息编译为“代码字符串”
// 2、按照w3c规则进行自我解析，生成对应的Tokens，最后转换为浏览器内核可以识别渲染的DOM节点
// 3、按照节点最后解析为对应的树DOM、TREE/CSSOM TREE

// 一个进程可以包含多个线程
// 进程是资源分配的最小单位，线程是程序执行的徐晓单位
// 有多个线程就可以同时做多件事情
// 浏览器打开页面，会开辟一个进程（每一个页面都是一个进程）
// 一个线程同时只能做一件事
// 浏览器本身是多线程的
// 渲染页面的：GUI线程
// 请求资源的：HTTP网络线程

// link和@import都是导入外部样式（从服务器获取样式文件）
// 1、遇到link，浏览器会派发一个新的线程（HTTP线程）去加载资源文件，与此同时GUI渲染线程会继续向下渲染代码，不管css是否会请求回来，代码继续渲染
// 2、遇到@import，GUI线程会暂时停止渲染，去服务器加载资源文件，资源文件没有返回之前，是不会继续渲染的，会阻碍浏览器的渲染
// 3、遇到style，GUI直接渲染