import FavoriteIcon from '../../img/favorite-btn.png'
import {FC} from 'react'
import { useThemeContext } from '../../context/themeModeContext';

interface FavoriteProps {

}

const Favorite: FC<FavoriteProps> = () => {

  const value = useThemeContext();
  const themeClass = value.theme==='dark' ? "dark-button" : "light-button"
    
  return (
    <div>
        <button onClick={(e) => console.log(e)} className={`favorite-button ${themeClass}`}><img src={FavoriteIcon} alt="" /></button>
    </div>
  )
}

export default Favorite