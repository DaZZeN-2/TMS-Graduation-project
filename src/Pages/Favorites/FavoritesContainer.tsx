import {FC} from "react";
import FavoritesView from "./FavoritesView";
import Header from "../../Components/header/Header";
import Menu from "../../Components/menu/Menu";
import './Favorites.css'


const FavoritesContainer: FC = () => {
    return (
        <div className="wrapper">
            <div>
                <Header/>
            </div>
            <div className="div-flex">
                <Menu activeStyle={Object}/>
                <div className="FavoritesView-container">
                    <FavoritesView/>
                </div>
            </div>
        </div>
    );
}

export default FavoritesContainer;