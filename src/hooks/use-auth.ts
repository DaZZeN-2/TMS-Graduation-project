import { useAppSelector } from "../hooks/redux-hooks";

export function useAuth() {
    const {email, token, id} = useAppSelector(state => state.persistedReducer.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}