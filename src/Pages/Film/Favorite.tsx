import FavoriteIcon from '../../img/favorite-btn.png'
import {FC, useState} from 'react'
import { useThemeContext } from '../../context/themeModeContext';
import { IMovie } from '../../types';
import { useAppSelector } from '../../hooks/redux-hooks';
import { useDispatch } from 'react-redux';
import { setMovieToFavorite } from '../../Redux/slices/favoriteSlice';

interface FavoriteProps {
  movie: IMovie | null
}

const Favorite: FC<FavoriteProps> = ({movie}) => {

  const value = useThemeContext();
  const themeClass = value.theme==='light' ? "dark-button" : "light-button"

  const dispatch = useDispatch();



const handleClick = () => {
    dispatch(setMovieToFavorite(movie?.id))
  }
  console.log(movie?.id)

    
  return (
    <div>
        <button onClick={handleClick} className={`favorite-button ${themeClass}`}><img src={FavoriteIcon} alt="" /></button>
    </div>
  )
}

export default Favorite