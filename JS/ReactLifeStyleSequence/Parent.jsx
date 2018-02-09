import React from 'react';
import Children1 from './Children1';
import Children2 from './Children2';

class Parent extends React.Component{
    state = {
        boolean: true,
    }
    onClick = () => {
        this.setState({
            boolean: !this.state.boolean
        });
    }
    componentWillMount() {
        console.log(1, "componentWillMount");
    }

    componentDidMount() {
        console.log(1, "componentDidMount");
    }

    componentWillReceiveProps() {
        console.log(1, "componentWillReceiveProps");
    }

    shouldComponentUpdate() {
        console.log(1, "shouldComponentUpdate");
        return true;        // 记得要返回true
    }

    componentWillUpdate() {
        console.log(1, "componentWillUpdate");
    }

    componentDidUpdate() {
        console.log(1, "componentDidUpdate");
    }

    componentWillUnmount() {
        console.log(1, "componentWillUnmount");
    }
    render() {
        console.log(1, "render");
        return (
            <div style={{
                border: '1px dashed #000',
                boxSizing: 'border-box',
                width: 602,
                textAlign: 'center',
                margin: '0 auto',
            }}>
                <div style={{
                    fontSize: 20,
                    boxSizing: 'border-box',
                    height: 200,
                    borderBottom: '1px dashed #000',
                }} onClick={this.onClick}>
                    <div>
                        boolean: {String(this.state.boolean)}
                    </div>
                    <div>...1...</div>
                </div>
                <div style={{
                    borderRight: '1px dashed #000',
                    height: 200,
                    width: 300,
                    boxSizing: 'border-box',
                    display: 'inline-block'
                }}>
                    <Children1 boolean={this.state.boolean} />
                </div>
                <div style={{
                    boxSizing: 'border-box',
                    width: 300,
                    display: 'inline-block'
                }}>
                    <Children2 boolean={this.state.boolean} />
                </div>
            </div>
        );
    }
}

export default Parent;