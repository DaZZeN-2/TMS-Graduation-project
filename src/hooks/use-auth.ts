import { useAppSelector } from "../hooks/redux-hooks";

export function useAuth() {
    const {email, token, id} = useAppSelector(state => state.rootReducer.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}