import {FC} from "react";
import TrendsView from "./TrendsView";
import Header from "../../Components/header/Header";
import Menu from "../../Components/menu/Menu";
import { useThemeContext } from "../../context/themeModeContext";


const TrendsContainer: FC = () => {

    const value = useThemeContext();
    const themeClass = value.theme==='light' ? "dark-theme" : "light-theme"

    return (
        <div className={`wrapper ${themeClass}`}>
        <Header/>
        <Menu activeStyle={Object}/>
            <TrendsView/>
        </div>
    );
}

export default TrendsContainer;