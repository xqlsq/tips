var count = 0;
var container = document.createDocumentFragment();
while ( count < 100000) {
    var div = document.createElement('div');
    div.className = 'd1';
    container.appendChild(div);
    count++;
}
console.log('GUI线程开始repaint...');
document.body.appendChild(container);
console.log('JS线程任务还在继续...');
document.body.onclick = function() {
    console.log('请在页面还未出现渲染效果的时候点击，你会发现这句话还没打印出来...');
};