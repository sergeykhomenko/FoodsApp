import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import './styles/main.scss';

ReactDOM.render(
    <App />,
    document.getElementById('mount-point')
);

ReactDOM.render(
    <Dashboard />,
    document.getElementById('dashboard-mount-point')
);

module.hot.accept();