import FavoriteIcon from '../../img/favorite-btn.png'
import {FC} from 'react'

interface FavoriteProps {

}

const Favorite: FC<FavoriteProps> = () => {
    
  return (
    <div>
        <button onClick={(e) => console.log(e)} className='favorite-button'><img src={FavoriteIcon} alt="" /></button>
    </div>
  )
}

export default Favorite