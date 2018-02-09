import React from 'react';
import PropTypes from 'prop-types';

export default class Children1 extends React.Component{
    static propTypes = {
        boolean: PropTypes.bool
    }
    state = {
        boolean: true,
    }
    onClick = () => {
        this.setState({
            boolean: !this.state.boolean
        });
    }
    componentWillMount() {
        console.log(1.1, "componentWillMount");
    }

    componentDidMount() {
        console.log(1.1, "componentDidMount");
    }

    componentWillReceiveProps() {
        console.log(1.1, "componentWillReceiveProps");
    }

    shouldComponentUpdate() {
        console.log(1.1, "shouldComponentUpdate");
        return true;        // 记得要返回true
    }

    componentWillUpdate() {
        console.log(1.1, "componentWillUpdate");
    }

    componentDidUpdate() {
        console.log(1.1, "componentDidUpdate");
    }

    componentWillUnmount() {
        console.log(1.1, "componentWillUnmount");
    }
    render() {
        console.log(1.1, "render");
        return (
            <div>
                <div>parent boolean:{String(this.props.boolean)}</div>
                <div>boolean:{String(this.state.boolean)}</div>
                <div
                    style={{textAlign: 'center', fontSize: 16}}
                    onClick={this.onClick}>
                    ...1.1...
                </div>
            </div>
        );
    }
}