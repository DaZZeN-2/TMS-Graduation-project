import {FC} from "react";
import './card.css'
import { IMovie } from '../../types'
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/themeModeContext";

interface CardProps {
    movie: IMovie,
}

const Card: FC<CardProps> = ({movie}) => {

    const value = useThemeContext();
    const themeClass = value.theme==='dark' ? "dark-theme" : "light-theme"

    const navigate = useNavigate()

    return(
        <div className='card-wrapper'>
            <div className="film-card-wrapper" onClick={() => navigate(`/film/${movie.id}`)}>
            <div>
                <img className="card-image" src={movie.big_poster} alt="cardIMG" />
            </div>
                <h2 className={`film-title ${themeClass}`}>{movie.name_russian}</h2>
                {/* <p className={`film-categories ${themeClass}`}">{movie.genres}</p> */}
            </div>
        </div>
    )
}

export default Card;