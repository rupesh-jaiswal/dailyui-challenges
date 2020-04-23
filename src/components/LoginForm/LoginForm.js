import React, { PureComponent } from "react";
import './LoginForm.scss';

export default class LoginForm extends PureComponent {
    render() {
        return (
            <div className="login-container"> 
                <h2>Login to My App</h2>
                <div className="login-container__elements">
                    <div className="username__container">
                        <input placeholder="Username" className="username__field" />
                    </div>

                    <div className="password__container">
                        <input placeholder="Password" className="password__field" />
                    </div>
                    <button>Login</button>
                </div>   
            </div>
        );
    }
};