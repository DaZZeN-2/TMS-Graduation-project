import {FC} from "react";
import './ProfileMenu.css'
import myFunction from '../../Components/ProfileMenu/dropdown'
import isNotAuth from '../../img/isNotAuth.png';
import Vector from '../../img/Vector.png'
import { useAuth } from "../../hooks/use-auth";
import { useAppDispatch } from "../../hooks/redux-hooks";
import {removeUser} from '../../Redux/slices/userSlice'
import { Link } from "react-router-dom";
import { RouteNames } from "../../Routes";
import Vector1 from '../../img/Vector1.png'
import { useThemeContext } from "../../context/themeModeContext";

interface ProfileMenuProps {

}


const ProfileMenu: FC<ProfileMenuProps> = () => {

    const dispatch = useAppDispatch();
    const {isAuth, email} = useAuth();

    const value = useThemeContext();
    const themeClass = value.theme==='dark' ? "dark-theme" : "light-theme"
    const themeClassLine = value.theme==='dark' ? "dark-line" : "light-line"
    const themeClassButton = value.theme==='dark' ? "dark-button-menu-wrapper" : "light-button-menu-wrapper"

    return isAuth ? (
    <div className="dropdown-menu">
        <button onClick={myFunction} className={`dropbtn ${themeClass}`}>
            <div className="avatar"><img src={isNotAuth} alt="profile-icon" /></div>
            {email}
            <img src={Vector} className="Vector"/>
            </button>
        <div id="myDropdown" className={`dropdown-content ${themeClassButton}`}>
        <button className={`dropdown-button ${themeClass}`}>Edit Profile</button>
        <div className={`line-wrapper ${themeClassLine}`}></div>
        <button className={`dropdown-button ${themeClass}`} onClick={() => dispatch(removeUser())}>Log Out</button>
        </div>
    </div>
    ) : (
        <div className="dropdown-menu">
            <button className={`dropbtn ${themeClass}`}>
                <div className="avatar">
                    <img src={isNotAuth} alt="not_auth_icon" />
                </div>
                <Link className="sign-in-link" to={RouteNames.LOGIN}>
                    <p className={`sign-in-text ${themeClass}`}>Sign In
                        <img className="Vector1" src={Vector1} alt="Vector" />
                    </p>
                </Link>
            </button>
        </div>
    )
}

export default ProfileMenu