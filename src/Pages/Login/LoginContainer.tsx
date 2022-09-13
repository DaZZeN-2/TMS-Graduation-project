import LoginView from "./LoginView";
import {FC} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from 'react-redux';
import {setUser} from '../../Redux/slices/userSlice';
import { RouteNames } from "../../Routes";
import {useNavigate} from 'react-router-dom';


const LoginContainer: FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate(RouteNames.HOME)
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
            <LoginView handleClick={handleLogin}/>
    );
}

export default LoginContainer;