import {FC} from "react";
import './card.css'
import { IGenre, IMovie } from '../../types'
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../context/themeModeContext";

interface CardProps {
    movie: IMovie,
}

const Card: FC<CardProps> = ({movie}) => {

    const value = useThemeContext();
    const themeClass = value.theme==='light' ? "dark-theme" : "light-theme"

    const navigate = useNavigate()

    const categorie = movie.genres.slice(0, 2).map((genre:IGenre) => genre.name_ru ).join(' · ')

    console.log(movie);
    

    return(
        <div className='card-wrapper'>
            <div className="film-card-wrapper" onClick={() => navigate(`/film/${movie.id}`)}>
            <div>
                <img className="card-image" src={movie.big_poster} alt="cardIMG" />
            </div>
                <h2 className={`film-title ${themeClass}`}>{movie.name_russian}</h2>
                <div className="genres-card-wrapper">
                <p className={`film-categories ${themeClass}`}>{categorie}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;