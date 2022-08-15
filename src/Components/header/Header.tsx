import {FC} from "react";
import './header.css'
import LogoLight from '../../img/pixema.png';
import LogoDark from '../../img/pixemaDark.png';
import {Link} from "react-router-dom";
import { RouteNames } from "../../Routes";
import ProfileMenu from '../ProfileMenu/ProfileMenu'
import Search from '../Search/SearchInput'
import { useThemeContext } from "../../context/themeModeContext";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {

    const value = useThemeContext();
    const themeClass = value.theme==='light' ? LogoLight : LogoDark

    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="Logo">
                    <Link to={RouteNames.HOME}><img className="Logo" src={themeClass} alt="Logo"/></Link>
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

