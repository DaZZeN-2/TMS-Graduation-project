import { FC, useEffect, useState } from 'react'
import FilmView from './FilmView';
import { IMovie } from '../../types';
import { useParams } from 'react-router-dom';
import './Film.css'
import Header from '../../Components/header/Header';
import Menu from '../../Components/menu/Menu';
import { getFilms } from '../../Redux/Api';
import { FilmContainerParams } from '../../types';
import { useThemeContext } from '../../context/themeModeContext';


const FilmContainer: FC = () => {

    const value = useThemeContext();
    const themeClass = value.theme==='dark' ? "dark-theme" : "light-theme"

    const [movie, setMovie] = useState<IMovie | null>(null);
    const params = useParams<FilmContainerParams>();
    
    useEffect(() => {
        getFilms()
        .then((res:any) => {
            setMovie(res.data.data.find((movie:IMovie) => Number(movie.id)===Number(params.id)))
            console.log(res.data.data.find((movie:IMovie) => Number(movie.id)===Number(params.id)))
    })
    .catch(error => {
        console.error(error);
    });
    }, [params.id])

    return (
        <div className={`wrapper ${themeClass}`}>
            <Header/>
        <div className="wrap">
            <Menu activeStyle={Object}/>
        <div>
            <FilmView movie={movie} key={movie?.id}/>
        </div>
        
        </div>
        </div>
    );
}
export default FilmContainer;