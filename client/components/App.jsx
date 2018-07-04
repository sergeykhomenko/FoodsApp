import React from 'react';

import Login from './Login.jsx';

class App extends  React.Component {
    render() {
        return (
            <div className="app">
                <h1 className="app-heading"> Foods App </h1>
                <p className="app-subheading">
                    <em>by Sergey Khomenko</em>
                </p>
                <Login />
            </div>
        );
    }
}

export default App;