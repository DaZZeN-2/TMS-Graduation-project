import './ForgotPass.css'
import { FC, useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../Routes';

interface LoginViewProps {
    handleClick: (email: string) => void;
}

const ForgotPassView: FC<LoginViewProps> = ({handleClick}) => {

    const [email, setEmail] = useState('');
    const auth = getAuth();

    const navigate = useNavigate();

    const triggerResetEmail = async () => {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent")
        navigate(RouteNames.HOME);
      }

    return(
        <div className="container">
            <div className="form-container">
                <div className='content-container'>
                <h1 className='reset-pass-title'>Reset Password</h1>
                <div className='reset-pass-lable-container'>
                    <label className='reset-pass-lable' htmlFor="reset-pass">Email</label>
                </div>
                <div>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='reset-pass-input' placeholder='Your email' type="text" id='reset-pass'/>
                </div>
                <button onClick={triggerResetEmail} className='forgot-pass-button'>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassView