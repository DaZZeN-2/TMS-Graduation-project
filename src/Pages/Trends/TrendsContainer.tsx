import {FC} from "react";
import TrendsView from "./TrendsView";
import Header from "../../Components/header/Header";
import Menu from "../../Components/menu/Menu";


const TrendsContainer: FC = () => {
    return (
        <div className="wrapper">
        <Header/>
        <Menu activeStyle={Object}/>
            <TrendsView/>
        </div>
    );
}

export default TrendsContainer;