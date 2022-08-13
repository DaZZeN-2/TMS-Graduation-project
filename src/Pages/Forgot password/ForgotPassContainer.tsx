import ForgotPassView from "./ForgotPassView"
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useDispatch } from "react-redux";
import {setUser} from '../../Redux/slices/userSlice';
import { FC } from "react";
import { actionCodeSettings } from "./ForgotPass";

const ForgotPassContainer: FC = () => {

    const dispatch = useDispatch();
    
    const handleReset = (email: string) => {
        const auth = getAuth();
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then((user:any) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                }));
                window.localStorage.setItem('emailForSignIn', email);
            })
            .catch((error) => {
                alert('Invalid Email!')
            });
    }


    return(
        <ForgotPassView handleClick={handleReset}/>
    )
}

export default ForgotPassContainer