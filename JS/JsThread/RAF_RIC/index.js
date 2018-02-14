var RAF = window.requestAnimationFrame;
var RIC= window.requestIdleCallback;

var update = function(num, func) {
    var degrees = 0;
    var temple = function() {
        document.getElementsByClassName('d1')[num].style.transform = `rotate(${ degrees }deg)`;
        console.log(`is ${ func.name }`);
        degrees = degrees + 1;
        if (degrees < 3) {
            func(temple);
        }
    };
    return temple;
};
var updateRIC11 = update(11, RIC);
var updateRAF10 = update(10, RAF);
RIC(updateRIC11);
RAF(updateRAF10);

if (module.hot) {
    module.hot.accept();
}