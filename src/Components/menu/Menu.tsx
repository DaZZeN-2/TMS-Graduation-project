import {FC} from "react";
import './menu.css'
import {NavLink} from "react-router-dom";
import {RouteNames} from "../../Routes";
import Home from '../../img/Home.png';
import Favorites from '../../img/Favorites.png';
import Trends from '../../img/Trends.png';
import Settings from '../../img/Settings.png';


interface MenuProps {
    activeStyle: object;
}



const Menu: FC<MenuProps> = () => {
    return (
        <div className="menu-wrapper">
        <div>
            <div className="home">
                <NavLink className="home-link" to={RouteNames.HOME}><img src={Home} alt="Home" />Home</NavLink>
            </div>
            <div className="trends">
            
                <NavLink className="trends-link" to={'/trends'}><img src={Trends} alt="Trends" />Trends</NavLink>
            </div>
            <div className="favorites">
                <NavLink className="favorites-link" to={'/favorites'}><img src={Favorites} alt="Trends" />Favorites</NavLink>
            </div>
            <div className="settings">
                <NavLink className="settings-link" to={'/settings'}><img src={Settings} alt="Trends" />Settings</NavLink>
            </div>
        </div>
        </div>

    )
}

export default Menu;