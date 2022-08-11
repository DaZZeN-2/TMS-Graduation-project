import {FC} from "react";
import Empty from '../../img/empty_favorites.png'
import './Favorites.css'


const FavoritesView: FC = () => {
    return (
            <div>
                <div>
                    <img src={Empty} alt="Empty state text" />
                </div>
                <div className="favorite-text">
                    <p>Empty state text</p>
                </div>
            </div>
    );
}

export default FavoritesView;