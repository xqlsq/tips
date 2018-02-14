
// var update = (deadline) => {
//     console.log('RAF...', deadline.didTimeout, deadline.timeRemaining());
//     requestIdleCallback(update);
// };

// requestIdleCallback(update);
// var now = new Date().getTime();
// while (now + 300 > new Date().getTime()) {

// }

// 必须要写
if (module.hot) {
    module.hot.accept();
}