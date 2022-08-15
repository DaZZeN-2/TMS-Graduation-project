import {FC} from "react";
import './menu.css'
import {NavLink} from "react-router-dom";
import {RouteNames} from "../../Routes";
import Home from '../../img/Home.png';
import Favorites from '../../img/Favorites.png';
import Trends from '../../img/Trends.png';
import Settings from '../../img/Settings.png';
import { useThemeContext } from "../../context/themeModeContext";


interface MenuProps {
    activeStyle: object;
}



const Menu: FC<MenuProps> = () => {

    const value = useThemeContext();
    const themeClass = value.theme==='light' ? "dark-theme" : "light-theme"
    
    return (
        <div className={`menu-wrapper ${themeClass}`}>
        <div>
            <div className="home">
                <NavLink className="home-link" to={RouteNames.HOME}><img src={Home} alt="Home" />Home</NavLink>
            </div>
            <div className="trends">
                <NavLink className="trends-link" to={RouteNames.TRENDS}><img src={Trends} alt="Trends" />Trends</NavLink>
            </div>
            <div className="favorites">
                <NavLink className="favorites-link" to={RouteNames.FAVORITES}><img src={Favorites} alt="Trends" />Favorites</NavLink>
            </div>
            <div className="settings">
                <NavLink className="settings-link" to={RouteNames.SETTINGS}><img src={Settings} alt="Trends" />Settings</NavLink>
            </div>
        </div>
        </div>

    )
}

export default Menu;