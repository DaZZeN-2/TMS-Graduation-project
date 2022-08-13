import {FC} from "react";
import FavoritesView from "./FavoritesView";
import Header from "../../Components/header/Header";
import Menu from "../../Components/menu/Menu";
import './Favorites.css'
import { useThemeContext } from "../../context/themeModeContext";


const FavoritesContainer: FC = () => {

    const value = useThemeContext();
    const themeClass = value.theme==='dark' ? "dark-theme" : "light-theme"

    return (
        <div className={`wrapper ${themeClass}`}>
            <div>
                <Header/>
            </div>
            <div className="div-flex">
                <Menu activeStyle={Object}/>
                <div className="FavoritesView-container">
                    <FavoritesView/>
                </div>
            </div>
        </div>
    );
}

export default FavoritesContainer;