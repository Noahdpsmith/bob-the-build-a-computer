import React from 'react';
import '../App.css';

const LoginRegister = () => {

    return(
                
                    <div className="login-page">
                        <div className="form">
                            <div className="login">
                                <div class="login-header">
                                    <h3>LOGIN</h3>
                                    <p>please enter your login credentials</p>

                                </div>
                            </div>
                            <form className="login-form">
                                <input type="text" placeholder="username"/>
                                <input type="text" placeholder="password"/>
                                <button>Login</button>
                                <p className="message">not registered? <a 
                                href="#">create an account</a></p>
                                
                            </form>
                        </div>
                    </div>
               
                
            
    );
}

export default LoginRegister;