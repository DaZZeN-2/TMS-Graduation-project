import {FC} from "react";
import SettingsView from "./SettingsView";
import Header from "../../Components/header/Header";
import Menu from "../../Components/menu/Menu";
import './Settings.css'


const SettingsContainer: FC = () => {
    return (
        <div className="wrapper">
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