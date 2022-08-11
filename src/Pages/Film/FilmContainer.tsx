import { FC, useEffect, useState } from 'react'
import FilmView from './FilmView';
import { IMovie } from '../../types';
import { useParams } from 'react-router-dom';
import './Film.css'
import Header from '../../Components/header/Header';
import Menu from '../../Components/menu/Menu';
import { Films, getFilm } from '../../Redux/Api';
import { FilmContainerParams } from '../../types';


const FilmContainer: FC = () => {

    const [movie, setMovie] = useState<IMovie []>([]);
    const params = useParams<FilmContainerParams>();
    
    useEffect(() => {
        Films()
        .then((res:any) => {
            setMovie(res.data)
    })
    .catch(error => {
        console.error(error);
    });
    }, [params.imdb])

    return (
        <div className="wrapper">
        <Header/>
        <div className="wrap">
        <Menu activeStyle={Object}/>
        <div>
            {movie.map(movie =><FilmView movie={movie} key={movie.id}/>)}
        </div>
        
        </div>
        </div>
    );
}
export default FilmContainer;