import {FC} from "react";
import './card.css'
import { IMovie } from '../../types'
import { useNavigate } from "react-router-dom";

interface CardProps {
    movie: IMovie,
}

const Card: FC<CardProps> = ({movie}) => {

    const navigate = useNavigate()

    return(
        <div className='card-wrapper'>
            <div className="film-card-wrapper" onClick={() => navigate(`/film/${movie.id}`)}>
            <div>
                <img className="card-image" src={movie.big_poster} alt="cardIMG" />
            </div>
                <h2 className="film-title">{movie.name_russian}</h2>
                {/* <p className="film-categories">{movie.genres}</p> */}
            </div>
        </div>
    )
}

export default Card;