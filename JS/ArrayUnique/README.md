# 数组去重

有如下方法：

## 遍历循环

第一种方法也是最一般、最常用的办法，使用数组的indexOf()方法。
```
let arr = [1,'1',2,'2',1,2,'x','y','f','x','y','f'];
function unique1(arr){
	let result = [arr[0]];
	for (let i = 1; i < arr.length; i++) {
		let item = arr[i];
		if(result.indexOf(item) == -1){
			result.push(item);
		}
	}
	return result;
}
console.log(unique1(arr));
```

但是indexOf方法内部实现也是去遍历数组知道找到目标为止，如果待去重的数组很长且重复的元素少，则会耗费了大量的时间。

## 存放Hash对象

第二种方法是将数组所有的元素转变成对象的键名，利用对象键名的不可重复的特性来去重。
```
let arr = [1,'1',2,'2',1,2,'x','y','f','x','y','f'];
function unique2(arr){
	let result = [];
	let obj ={};
	for(let i =0;i<arr.length;i++){
	  let item = arr[i];
	  if(!obj[item]){
	    result.push(item);
	    obj[item] = 1;
	  }
	}
	return result;
}
console.log(unique2(arr))
```
在时间消耗上来看，这种方法比第一种方法要快很多，因为从对象中取属性值消耗的时间几乎可以不计，但是存在以下两个问题：

* 由于需要存放Hash对象，因此在内存占用上比第一种方法会多占用更多的内存空间，就是所谓的空间换时间。
* 从上面的排序结果我们会发现一个问题，’12’不在结果中。因为在键名中，String类型的’12’和Number类型的12对于Hash对象来说都是一样的。

## 排序比较

第三种方法利用数组原生的sort()方法，将数组先进行排序，排序后比较相邻两个元素的值。
```
let arr = [1,'1',2,'2',1,2,'x','y','f','x','y','f'];
function unique3(arr) {
    let result = [arr[0]];
    arr = arr.sort();
    for (let i = 1; i < arr.length; i++) {
        let item = arr[i];
        if (item !== result[result.length - 1]) {
            result.push(item)
        }
    }
    return result;
}
console.log(unique3(arr))
```
这种方法比indexOf()消耗的时间要短，比存放Hash对象占用的内存要小，算是一种折中两者的方法。但是也存在一个问题，就是去重后的数组的顺序发生了改变。

## 利用Set类型
如果你开发环境支持ES6，这个方法是最简洁的。
```
let arr = [1,'1',2,'2',1,2,'x','y','f','x','y','f'];
function unique4(arr){
    return Array.from(new Set(arr));
}
console.log(unique4(arr));
```