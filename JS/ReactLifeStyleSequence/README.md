## react父子组件的生命周期顺序
react 有如下生命周期：
```
(constructor: 不属于生命周期)
componentWillMount
render
componentDidMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate

compinentWillUnmount
```

如图：
![]('./167AD70E-617B-4BAC-AAD6-DBDD459C01A4.png')

![引用文章图]('https://www.jianshu.com/p/4784216b8194')

## 运行

```
npm start file -- --./js/ReactLifeStyleSequence
```
### 开局加载

生命周期执行过程如下：

```
1 "componentWillMount"
1 "render"
1.1 "componentWillMount"
1.1 "render"
1.2 "componentWillMount"
1.2 "render"
1.1 "componentDidMount"
1.2 "componentDidMount"
1 "componentDidMount" 
```

可以看到一个嵌套的父子组件，生命周期过程开始于父组件（`componentWillMount`），结束与父组件（`componentDidMount`），子组件以在父组件的顺序依次开始执行生命周期过程，需要注意的是，组件的周期函数以render为分界，如上图render上面的生命周期是一次性执行的，不会被其他组件周期打断。
需要注意的是，`shouldComponentUpdate` 返回false，下面的周期就不会执行了

### 父组件setState

点击页面上半部分，生命周期执行过程如下：
```
1 "shouldComponentUpdate"
1 "componentWillUpdate"
1 "render"
1.1 "componentWillReceiveProps"
1.1 "shouldComponentUpdate"
1.1 "componentWillUpdate"
1.1 "render"
1.2 "componentWillReceiveProps"
1.2 "shouldComponentUpdate"
1.2 "componentWillUpdate"
1.2 "render"
1.1 "componentDidUpdate"
1.2 "componentDidUpdate"
1 "componentDidUpdate"
```
可以看到一个嵌套的父子组件，生命周期过程开始于父组件（`shouldComponentUpdate || componentWillUpdate`），结束与父组件（`componentDidUpdate`），子组件以在父组件的顺序依次开始执行生命周期过程，需要注意的是，组件的周期函数以render为分界，如上图render上面的生命周期是一次性执行的，不会被其他组件周期打断。


### 子组件setState

点击子组件1.1，生命周期执行过程如下：
```
1.1 "shouldComponentUpdate"
1.1 "componentWillUpdate"
1.1 "render"
1.1 "componentDidUpdate"
```
不影响其他兄弟组件或父组件