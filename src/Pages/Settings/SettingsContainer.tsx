import {FC} from "react";
import SettingsView from "./SettingsView";
import Header from "../../Components/header/Header";
import Menu from "../../Components/menu/Menu";
import './Settings.css'
import { useThemeContext } from "../../context/themeModeContext";


const SettingsContainer: FC = () => {

    const value = useThemeContext();
    const themeClass = value.theme==='dark' ? "dark-theme" : "light-theme"

    return (
        <div className={`wrapper ${themeClass}`}>
            <div>
                <Header/>
            </div>
            <div className="div-flex">
                <Menu activeStyle={Object}/>
                <div>
                    <SettingsView/>
                </div>
            </div>
        </div>
    );
}

export default SettingsContainer;