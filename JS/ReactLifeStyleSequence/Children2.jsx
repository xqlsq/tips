import React from 'react';
import PropTypes from 'prop-types';

export default class Children2 extends React.Component{
    static propTypes = {
        boolean: PropTypes.bool
    }
    componentWillMount() {
        console.log(1.2, "componentWillMount");
    }

    componentDidMount() {
        console.log(1.2, "componentDidMount");
    }

    componentWillReceiveProps() {
        console.log(1.2, "componentWillReceiveProps");
    }

    shouldComponentUpdate() {
        console.log(1.2, "shouldComponentUpdate");
        return true;        // 记得要返回true
    }

    componentWillUpdate() {
        console.log(1.2, "componentWillUpdate");
    }

    componentDidUpdate() {
        console.log(1.2, "componentDidUpdate");
    }

    componentWillUnmount() {
        console.log(1.2, "componentWillUnmount");
    }
    render() {
        console.log(1.2, "render");
        return (
            <div>
                <div>parent boolean: {String(this.props.boolean)}</div>
                <div style={{textAlign: 'center', fontSize: 16}}>...1.2...</div>
            </div>
        );
    }
}