import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './Parent';

ReactDOM.render(<Parent />, document.getElementById('root'));

// 必须要写
if (module.hot) {
    module.hot.accept();
}