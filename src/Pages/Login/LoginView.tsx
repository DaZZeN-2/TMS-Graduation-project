import {FC} from "react";
import './Login.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { RouteNames } from "../../Routes";



interface LoginViewProps {
    handleClick: (email: string, pass: string) => void;
}



const LoginView: FC<LoginViewProps> = ({handleClick}) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    return (
        <div className="wrapper-login">
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="title-container">
                        <h2 className="title">Sign In</h2>
                    </div>
                    <div className="email-container">
                    <label htmlFor="email">Email</label>
                        <div>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className="email-input" type="email" placeholder="Your email" id="email"/>
                        </div>
                    </div>
                    <div className="password-container">
                    <label htmlFor="password">Password</label>
                        <div>
                            <input onChange={(e) => setPass(e.target.value)} value={pass} className="password-input" type="password" placeholder="Your password" id="password"/>
                        </div>
                        <div className="forgot-pass-container">
                            <Link className="forgot-pass" to={RouteNames.FORGOT_PASSWORD}>Forgot password?</Link>
                        </div>
                    </div>
                    <div className="button-container">
                        <button onClick={() => handleClick(email, pass)} style={{cursor: 'pointer'}}>Sign in</button>
                    </div>
                    <div className="register-text-container">
                        <p className="register-text">Don’t have an account?
                            <Link className="register-link" to={RouteNames.REGISTER}> Sign Up</Link>
                        </p>
                    </div>
                </div>
            
                
            </div>
        </div>
    )
}

export default LoginView;