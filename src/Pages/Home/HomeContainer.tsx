import HomeView from "./HomeView";
import {FC} from "react";
import Menu from "../../Components/menu/Menu";
import Header from "../../Components/header/Header";


const HomeContainer: FC = () => {
    
    return (
        <div className="wrapper">
        <Header/>
        <div className="wrap">
        <Menu activeStyle={Object}/>
        <HomeView/>
        </div>
        </div>
    );
}

export default HomeContainer;