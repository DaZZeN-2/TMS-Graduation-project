import {FC} from "react";
import { useThemeContext } from "../../context/themeModeContext";
import Empty from '../../img/empty_favorites.png'
import './Favorites.css'


const FavoritesView: FC = () => {

    const value = useThemeContext();
    const themeClassFavoriteText = value.theme==='light' ? "dark-text" : "light-text"

    return (
            (<div>
                <div>
                    <img src={Empty} alt="Empty state text" />
                </div>
                <div>
                    <p className={`favorite-text ${themeClassFavoriteText}`}>You don't have any favorite movies yet</p>
                </div>
            </div>)
    );
}

export default FavoritesView;