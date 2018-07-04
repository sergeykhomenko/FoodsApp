import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div className="login">
                <input type="email" name="login" required placeholder="E-mail" />
                <input type="password" name="pass" required placeholder="Password" />
                <div className="login-actions">
                    <div className="login-remember">
                        <input type="checkbox"/>
                        <p>Remember me?</p>
                    </div>
                    <button>Log In</button>
                </div>
            </div>
        );
    }

}

export default Login;