/*
 * @Author: yeah
 * @Date: 2020-06-03 10:57:04
 * @LastEditTime: 2020-06-03 15:50:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yeah\source\NextTick.js
 */ 
var nextTick = (function(){
    var calbacks = []; // 存储需要触发的回调函数
    var pending = false; // 是否正在等待的标识（false: 允许触发在下次事件循环触发callbacks中的回调，true: 已经触发过，需要等到下次事件循环）
    var timeFunc; // 设置在下次事件循环触发callbacks的触发函数
    // 处理callbacks的函数
    function nextTickHandler(){
        pending = false; // 可以触发timeFunc
        var copies = callbacks.slice(0); // 复制callback
        callbacks.length = 0; // 清空callback
        for(var i = 0; i < copies.length; i++){
            copies[i](); // 触发callback回调函数
        }
    }
    // 如果支持Promise，使Promise实现
    if(typeof Promise !== "undefined" && isNative(Promise)){
        var p = Promise.resolve();
        var logError = function (err) {
            console.error(err);
        }
        timeFunc = function(){
            p.then(nextTickHandler).catch(logError);
            // iosde webview下，需要强制刷新队列，执行上面的回调函数
            if(isIOS){
                setTimeout(noop);
            }
        };
    // 如果Promise不支持，但是支持MutationObserver
    }else if(typeof MutationObserver !== "undefined" && (
        isNative(MutationObserver) ||
        // PhantomJS and iOS 7.x
        MutationObserver.toString() === "[object MutationObserverConstructor]"
    )){ 
        // use MutationObserver there native Promise is not avaliable
        // e.g PhantomJS IE11, iOS7, aNDROID 4.4
        var counter = 1;
        var observer = new MutationObserver(nextTickHandler);
        // 创建一个textnode dom节点，并让MutationObserver监视这个节点；而timeFunc正是改变这个dom节点的触发函数
        var textNode = document.createTextNode(String(counter));
        observer.observe(textNode, {
            characterData: true
        });
        timeFunc = function(){
            counter = (counter + 1) % 2;
            textNode.data = String(counter);
        }
    // 如果上面两种都不支持， 就使用setTimeout
    }else{
        timeFunc = function(){
            setTimeout(nextTickHandler, 0);
        };
    }
    // nextTick接受的函数，参数1：回调函数，参数2：回调函数的执行上下文
    return function queueNextTick(cb, ctx){
        var _resolve; // 用于接受触发，promise.then中的回调的函数
        // 向回调数据中push callback
        callbacks.push(function(){
            // 如果有回调函数，执行回调函数
            if(cb) {cb.call(ctx);}
            if(_resolve){_resolve(ctx);} // 触发promise的then回调
        });
        if(!pending){ // 是否执行刷新callback队列
            pending = true;
            timeFunc();
        }
        // 如果没有传递回调函数，并且当前浏览器支持peomise，使用promise实现
        if(!cb && typeof Promise !== "undefined"){
            return new Promise(function(resolve){
                _resolve = resolve;
            })
        }
    }
})();

// MutationObserver是HTML5新增的属性，用于监听DOM修改时间，能够监听到节点的属性、文本内容、子节点等的改动，
// 是一个功能强大的利器
// eg:
// var observer = new MutationObserver(function(){
//     console.log("DOM被修改了");
// });
// var article = document.querySelector("article");
// observer.observe(article);

// 1.newxtTick()并不会重绘当前页面，并且它也不是在页面重绘才执行，而是在此次事件循环结束后一定会执行的
// 2.此方法的触发并不是在页面更新完成才执行，但是能在此方法中取到更新后的数据，那是因为dom元素的属性已经在wacher执行flush队列的时候改变了，因此是可以在此时获取的。
// h5有一个方法requestFrameAnimation(callback)，此方法的回调是在页面重绘之前调用。nextTick()在此方法之前调用。