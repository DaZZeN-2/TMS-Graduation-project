import HomeContainer from "../Pages/Home/HomeContainer"
import LoginContainer from "../Pages/Login/LoginContainer"
import RegisterContainer from "../Pages/Register/RegisterContainer"
import FavoritesContainer from "../Pages/Favorites/FavoritesContainer"
import TrendsContainer from "../Pages/Trends/TrendsContainer"
import SettingsContainer from "../Pages/Settings/SettingsContainer"
import FilmContainer from "../Pages/Film/FilmContainer"
import ForgotPassContainer from "../Pages/Forgot password/ForgotPassContainer"


export const RouteNames = {
    HOME: '/',
    TRENDS: '/trends',
    FAVORITES: '/favorites',
    SETTINGS: '/settings',
    FILM_POST: '/film/:id',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/forgot-password/'
}

export const publicRoutes = [
    {path: RouteNames.HOME, component: <HomeContainer/>},
    {path: RouteNames.TRENDS, component: <TrendsContainer/>},
    {path: RouteNames.FAVORITES, component: <FavoritesContainer/>},
    {path: RouteNames.SETTINGS, component: <SettingsContainer/>},
    {path: RouteNames.FILM_POST, component: <FilmContainer/>},
    {path: RouteNames.LOGIN, component: <LoginContainer/>},
    {path: RouteNames.REGISTER, component: <RegisterContainer/>},
    {path: RouteNames.FORGOT_PASSWORD, component: <ForgotPassContainer/>},
]
