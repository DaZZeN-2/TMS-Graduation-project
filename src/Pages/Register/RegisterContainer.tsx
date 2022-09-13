import RegisterView from "./RegisterView";
import {FC} from "react";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useAppDispatch } from "../../hooks/redux-hooks";
import {useNavigate} from 'react-router-dom';
import { RouteNames } from "../../Routes";
import {setUser} from '../../Redux/slices/userSlice'

const RegisterContainer: FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate(RouteNames.HOME);
            })
            .catch(console.error)
    }
  

    return (
            <RegisterView handleClick={handleRegister}/>
    );
}

export default RegisterContainer;