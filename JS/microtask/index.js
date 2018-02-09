console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);

// 必须要写
if (module.hot) {
    module.hot.accept();
}