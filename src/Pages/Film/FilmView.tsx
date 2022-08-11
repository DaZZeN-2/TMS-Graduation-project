import { FC } from 'react'
import { IMovie } from '../../types';
import IMDb from '../../img/imdb-rating-img.png'
import Favorite from './Favorite';
import Share from './Share';

interface FilmProps {
    movie: IMovie,
}

const FilmView: FC<FilmProps> = ({movie}) => {
    return (
        <div className='post-wrapper'>
            <div className='post-img-wrapper'>
                <img className='post-img' src={movie.big_poster} alt="" />
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
                    <p className='categories'>{movie.genres}</p>
                <div className='post-title-wrapper'>
                    <h1 className='post-title'>{movie.name_russian}</h1>
                </div>
                <div className='post-rating-and-runtime-wrapper'>
                    <div className='post-rating'>
                        <p className='post-rating-text'>{movie.rating_imdb}</p>
                    </div>

                    <div className='post-rating-imdb'>
                        <img className='imdb-img' src={IMDb}/>
                        <p className='post-rating-text'>{movie.rating_imdb}</p>
                    </div>

                    <div className='post-runtime'>
                        <p className='post-runtime-text'>{movie.time}</p>
                    </div>
                </div>
                <div className='post-discription-wrapper'>
                    <p className='post-discription-text'>{movie.description}</p>
                </div>
                <div className='film-data-wrapper'>
                    <div className='film-year-wrapper'>
                    <div className='film-year-data'>
                        <p className='film-year'>Year:</p>
                    </div>
                    <div>
                        <p className='film-year-data-text'>{movie.year}</p>
                    </div>
                    </div>

                    <div className='film-release-wrapper'>
                    <div className='film-release-data'>
                        <p className='film-release'>Release:</p>
                    </div>
                    <div>
                        <p className='film-release-data-text'>{movie?.year_start}</p>
                    </div>
                    </div>

                    <div className='film-boxoffice-wrapper'>
                    <div className='film-boxoffice-data'>
                        <p className='film-boxoffice'>BoxOffice:</p>
                    </div>
                    <div>
                        <p className='film-boxoffice-data-text'>{movie?.budget}</p>
                    </div>
                    </div>

                    <div className='film-country-wrapper'>
                    <div className='film-country-data'>
                        <p className='film-country'>Country:</p>
                    </div>
                    <div>
                        <p className='film-country-data-text'>{movie?.country_ru}</p>
                    </div>
                    </div>

                    <div className='film-production-wrapper'>
                    <div className='film-production-data'>
                        <p className='film-production'>Production:</p>
                    </div>
                    <div>
                        <p className='film-production-data-text'>{movie.persons}</p>
                    </div>
                    </div>

                    <div className='film-actors-wrapper'>
                    <div className='film-actors-data'>
                        <p className='film-actors'>Actors:</p>
                    </div>
                    <div>
                        <p className='film-actors-data-text'>{movie.persons}</p>
                    </div>
                    </div>

                    <div className='film-director-wrapper'>
                    <div className='film-director-data'>
                        <p className='film-director'>Director:</p>
                    </div>
                    <div>
                        <p className='film-director-data-text'>{movie?.persons}</p>
                    </div>
                    </div>

                    <div className='film-writer-wrapper'>
                    <div className='film-writer-data'>
                        <p className='film-writer'>Writers:</p>
                    </div>
                    <div>
                        <p className='film-writer-data-text'>{movie?.persons}</p>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            
        </div>
    );
}
export default FilmView;