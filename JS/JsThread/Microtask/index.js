
// var update = (deadline) => {
//     console.log('RAF...', deadline.didTimeout, deadline.timeRemaining());
//     requestIdleCallback(update);
// };

// requestIdleCallback(update);
// var now = new Date().getTime();
// while (now + 300 > new Date().getTime()) {

// }

const observe = new MutationObserver(
    () => {
        console.log(1);
    }
);

var ele = document.createElement('div');
ele.setAttribute('boolean', 'true');

observe.observe(ele, {
    attributes: true
});

function onClick() {
    setTimeout(() => console.log(3333), 0);
    console.log(1111);
    ele.setAttribute('boolean', ele.attributes.boolean === 'true' ? 'false' : 'true');
    console.log(22222);
}

document.body.onclick = onClick;
// 必须要写
if (module.hot) {
    module.hot.accept();
}