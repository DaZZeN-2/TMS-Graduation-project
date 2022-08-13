import HomeView from "./HomeView";
import {FC} from "react";
import Menu from "../../Components/menu/Menu";
import Header from "../../Components/header/Header";
import { useThemeContext } from "../../context/themeModeContext";


const HomeContainer: FC = () => {
    const value = useThemeContext();
    const themeClass = value.theme==='dark' ? "dark-theme" : "light-theme"
    
    return (
        <div className={`wrapper ${themeClass}`}>
        <Header/>
        <div className="wrap">
        <Menu activeStyle={Object}/>
        <HomeView/>
        </div>
        </div>
    );
}

export default HomeContainer;