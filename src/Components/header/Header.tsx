import {FC} from "react";
import './header.css'
import Logo from '../../img/pixema.png';
import {Link} from "react-router-dom";
import { RouteNames } from "../../Routes";
import ProfileMenu from '../ProfileMenu/ProfileMenu'
import Filter from '../../img/filter-icon.png'

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {



    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="Logo">
                    <Link to={RouteNames.HOME}><img className="Logo" src={Logo} alt="Logo"/></Link>
                </div>
                <div className="Search">
                    <input onChange={(e) => console.log(e.target.value)} className="search-input" placeholder="Search" type="text"></input>
                    <img className="filter-icon" src={Filter} alt='filter'/>
                </div>
                <div>
                    <ProfileMenu/>
                </div>
            </div>
        </div>
    )
}

export default Header;

