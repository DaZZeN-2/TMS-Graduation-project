import { FC, useState } from "react";
import './Register.css';
import { Link } from "react-router-dom";
import { RouteNames } from "../../Routes";


interface RegisterViewProps {
    handleClick: (email: string, pass: string, name: string) => void;
}



const RegisterView: FC<RegisterViewProps> = ({handleClick}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onClick = () => {
        if(!(pass && confirmPassword && pass === confirmPassword)) {
            alert('incorrect');
            return
        }
        handleClick(email, pass, name)
    }

    return (
        <div className="wrapper-register">
            <div className="register-wrapper">
            <div className="global-register-container">
            <div className="login-container">
                    <h2 className="title">Sign Up</h2>
                    <div className="email-container">
                    <label htmlFor="email">Name</label>
                        <div>
                            <input value={name} onChange={(e) => setName(e.target.value)} className="email-input" type="text" placeholder="Your name" id="email"/>
                        </div>
                    </div>
                    <div className="email-container">
                    <label htmlFor="email">Email</label>
                        <div>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="email-input" type="text" placeholder="Your email" id="email"/>
                        </div>
                    </div>
                    <div className="password-container">
                    <label htmlFor="password">Password</label>
                        <div>
                            <input value={pass} onChange={(e) => setPass(e.target.value)} className="password-input" type="password" placeholder="Your password" id="password"/>
                        </div>
                    </div>
                    <div className="password-container">
                    <label htmlFor="password">Confirm password</label>
                        <div>
                            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="password-input" type="password" placeholder="Confirm  password" id="confirm_password"/>
                        </div>
                    </div>
                    <div className="button-container">
                        <button onClick={() => onClick()} style={{cursor: 'pointer'}}>Sign Up</button>
                    </div>
                    <div className="register-text-container">
                        <p className="register-text">Already have an account?
                            <Link className="register-link" to={RouteNames.LOGIN}> Sign In</Link>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterView;