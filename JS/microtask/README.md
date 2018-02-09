## 简介

一个事件循环(EventLoop)中会有一个正在执行的任务(Task)，而这个任务就是从 macrotask 队列中来的。在[whatwg规范](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue)中有 queue 就是任务队列。当这个 macrotask 执行结束后所有可用的 microtask 将会在同一个事件循环中执行，当这些 microtask 执行结束后还能继续添加 microtask 一直到真个 microtask 队列执行结束。

## 怎么用

基本来说，当我们想以同步的方式来处理异步任务时候就用 microtask（比如我们需要直接在某段代码后就去执行某个任务，就像Promise一样）。

其他情况就直接用 macrotask。

## 两者的具体实现
macrotasks: setTimeout setInterval setImmediate I/O UI渲染
microtasks: Promise process.nextTick Object.observe MutationObserver
从规范中理解
whatwg规范：https://html.spec.whatwg.org/multipage/webappapis.html#task-queue

- 一个事件循环(event loop)会有一个或多个任务队列(task queue) task queue 就是 macrotask queue
- 每一个 event loop 都有一个 microtask queue
- task queue == macrotask queue != microtask queue
- 一个任务 task 可以放入 macrotask queue 也可以放入 microtask queue 中
- 当一个 task 被放入队列 queue(macro或micro) 那这个 task 就可以被立即执行了

再来回顾下事件循环如何执行一个任务的流程

当执行栈(call stack)为空的时候，开始依次执行：

1. 把最早的任务(task A)放入任务队列
2. 如果 task A 为null (那任务队列就是空)，直接跳到第6步
3. 将 currently running task 设置为 task A
4. 执行 task A (也就是执行回调函数)
5. 将 currently running task 设置为 null 并移出 task A
6. 执行 microtask 队列
    - a: 在 microtask 中选出最早的任务 task X
    - b: 如果 task X 为null (那 microtask 队列就是空)，直接跳到 g
    - c: 将 currently running task 设置为 task X
    - d: 执行 task X
    - e: 将 currently running task 设置为 null 并移出 task X
    - f: 在 microtask 中选出最早的任务 , 跳到 b
    - g: 结束 microtask 队列
7. 跳到第一步

上面就算是一个简单的 event-loop 执行模型

再简单点可以总结为：

1. 在 macrotask 队列中执行最早的那个 task ，然后移出
2. 执行 microtask 队列中所有可用的任务，然后移出
3. 下一个循环，执行下一个 macrotask 中的任务 (再跳到第2步)

## 其他

- 当一个task(在 macrotask 队列中)正处于执行状态，也可能会有新的事件被注册，那就会有新的 task 被创建。比如下面两个

    - promiseA.then() 的回调就是一个 task
        - promiseA 是 resolved或rejected: 那这个 task 就会放入当前事件循环回合的 microtask queue
        - promiseA 是 pending: 这个 task 就会放入 事件循环的未来的某个(可能下一个)回合的 microtask queue 中
    - setTimeout 的回调也是个 task ，它会被放入 macrotask queue 即使是 0ms 的情况
- microtask queue 中的 task 会在事件循环的当前回合中执行，因此 macrotask queue 中的 task 就只能等到事件循环的下一个回合中执行了
- click ajax setTimeout 的回调是都是 task, 同时，包裹在一个 script 标签中的js代码也是一个 task 确切说是 macrotask。

## 个人理解

浏览器进程主要分为 js线程、GUI线程（渲染layout、rendering、paint）、event线程；
1、js线程执行主任务macrotask
2、macrotask结束，查询当前队列中的microtask，如果有，js线程执行
3、如果以上操作有涉及dom的rendering 或者layout，GUI线程执行paint
4、event线程收集注册的事件，适时放入js线程开始执行

## 引用
> https://github.com/ccforward/cc/issues/47

> https://juejin.im/entry/58332d560ce46300610e4bad