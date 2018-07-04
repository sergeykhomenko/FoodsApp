import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Foods';

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('mount-point')
);

module.hot.accept();