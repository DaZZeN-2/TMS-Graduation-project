import {FC} from "react";
import './header.css'
import Logo from '../../img/pixema.png';
import {Link} from "react-router-dom";
import { RouteNames } from "../../Routes";
import ProfileMenu from '../ProfileMenu/ProfileMenu'
import Search from '../Search/SearchInput'

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {



    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="Logo">
                    <Link to={RouteNames.HOME}><img className="Logo" src={Logo} alt="Logo"/></Link>
                </div>
                <div>
                    <Search/>
                </div>
                    <ProfileMenu/>
            </div>
        </div>
    )
}

export default Header;

