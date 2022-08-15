import { FC } from 'react'
import { IGenre, IMovie } from '../../types';
import IMDb from '../../img/imdb-rating-img.png'
import Favorite from './Favorite';
import Share from './Share';
import { useThemeContext } from '../../context/themeModeContext';

interface FilmProps {
    movie: IMovie | null,
}

const FilmView: FC<FilmProps> = ({movie}) => {

    const value = useThemeContext();
    const themeClass = value.theme==='light' ? "dark-theme" : "light-theme"
    const themeClassForm = value.theme==='light' ? "dark-rate-form" : "light-rate-form"

    return (
        <div className={`post-wrapper ${themeClass}`}>
            <div className='post-img-wrapper'>
                <img className='post-img' src={movie?.big_poster} alt="movie_poster" />
                <div className='buttons-wrapper'>
                <div>
                    <Favorite/>
                </div>
                <div>
                    <Share/>
                </div>
                </div>
            </div>
            <div className='content-wrapper'>
                <div className='categirie-wrapper'>
                    <div className='genres-wrapper'>
                {movie?.genres.map((genre:IGenre) => <p className='categories'>{genre.name_ru}</p>)}
                    </div>
                <div className='post-title-wrapper'>
                    <h1 className={`post-title ${themeClass}`}>{movie?.name_russian}</h1>
                </div>
                <div className='post-rating-and-runtime-wrapper'>
                    <div className='post-rating'>
                        <p className='post-rating-text'>{movie?.rating_imdb}</p>
                    </div>

                    <div className={`post-rating-imdb ${themeClassForm}`}>
                        <img className='imdb-img' src={IMDb} alt="imdb_icon_rating"/>
                        <p className='post-rating-text'>{movie?.rating_imdb}</p>
                    </div>

                    <div className={`post-runtime ${themeClassForm}`}>
                        <p className='post-runtime-text'>{movie?.time_minutes} min</p>
                    </div>
                </div>
                <div className='post-discription-wrapper'>
                    <p className={`post-discription-text ${themeClass}`}>{movie?.description}</p>
                </div>
                <div className='film-data-wrapper'>
                    <div className='film-year-wrapper'>
                    <div className='film-year-data'>
                        <p className='film-year'>Year:</p>
                    </div>
                    <div>
                        <p className={`film-year-data-text ${themeClass}`}>{movie?.year}</p>
                    </div>
                    </div>

                    <div className='film-release-wrapper'>
                    <div className='film-release-data'>
                        <p className='film-release'>Release:</p>
                    </div>
                    <div>
                        <p className={`film-release-data-text ${themeClass}`}>{movie?.year_start}</p>
                    </div>
                    </div>

                    <div className='film-boxoffice-wrapper'>
                    <div className='film-boxoffice-data'>
                        <p className='film-boxoffice'>BoxOffice:</p>
                    </div>
                    <div>
                        <p className={`film-boxoffice-data-text ${themeClass}`}>{movie?.budget}</p>
                    </div>
                    </div>

                    <div className='film-country-wrapper'>
                    <div className='film-country-data'>
                        <p className='film-country'>Country:</p>
                    </div>
                    <div>
                        <p className={`film-country-data-text ${themeClass}`}>{movie?.country_ru}</p>
                    </div>
                    </div>

                    <div className='film-production-wrapper'>
                    <div className='film-production-data'>
                        <p className='film-production'>Production:</p>
                    </div>
                    <div>
                        {/* <p className='film-production-data-text'>{movie?.persons}</p> */}
                    </div>
                    </div>

                    <div className='film-actors-wrapper'>
                    <div className='film-actors-data'>
                        <p className='film-actors'>Actors:</p>
                    </div>
                    <div>
                        {/* <p className='film-actors-data-text'>{movie?.persons}</p> */}
                    </div>
                    </div>

                    <div className='film-director-wrapper'>
                    <div className='film-director-data'>
                        <p className='film-director'>Director:</p>
                    </div>
                    <div>
                        {/* <p className='film-director-data-text'>{movie?.persons}</p> */}
                    </div>
                    </div>

                    <div className='film-writer-wrapper'>
                    <div className='film-writer-data'>
                        <p className='film-writer'>Writers:</p>
                    </div>
                    <div>
                        {/* <p className='film-writer-data-text'>{movie?.persons}</p> */}
                    </div>
                    </div>
                </div>
                </div>

            </div>
            
        </div>
    );
}
export default FilmView;