var RAF = window.requestAnimationFrame;
var RIC = window.requestIdleCallback;

var update = (name) =>  {
    return () => {
        var div = document.createElement('div');
        div.className = 'd1';
        document.body.appendChild(div);
        console.log(`${name}...`);
    };
};

RIC(update('RIC'));
setTimeout(() => console.log('定时器...'), 18);
RAF(update('RAF'));
Promise.resolve().then(() => console.log('Promise.then...'));
console.log('JS主线程...');

if (module.hot) {
    module.hot.accept();
}