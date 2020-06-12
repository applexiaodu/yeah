/*
 * @Author: yeah
 * @Date: 2020-06-10 09:20:40
 * @LastEditTime: 2020-06-10 09:32:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yeah\queue\queue.js
 */
// 队列先进先出
function Queue() {
    this.container = [];
}
Queue.prototype = {
    constructor: Queue,
    enter: function enter(element) {
        this.container.push(element);
    },
    leave: function leave() {
        if (this.container.length === 0) return;
        return this.container.shift();
    },
    size: function size() {
        return this.container.length;
    },
    value: function value() {
        // 深克隆是为了保证对外面接收到的value的操作不影响内部容器的value
        return JSON.parse(JSON.stringify(this.container));
    }
}

// 击鼓传花
function game(n, m) {
    let qe = new Queue();
    for (let i = 1; i <= n; i++) {
        qe.push(i);
    }
    while (qe.size() > 1) {
        for (let i = 0; i < m - 1; i++) {
            qe.enter(qe.leave());
        }
        qe.leave();
    }
    return qe.value()[0];
}
let res = game(6, 4);
console.log(res);