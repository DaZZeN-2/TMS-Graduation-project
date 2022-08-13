import ShareIcon from '../../img/share-icon.png'
import {FC} from 'react'
import { useThemeContext } from '../../context/themeModeContext';

interface ShareProps {

}

const Share: FC<ShareProps> = () => {

  const value = useThemeContext();
  const themeClass = value.theme==='dark' ? "dark-button" : "light-button"
    
  return (
    <div>
        <button className={`share-button ${themeClass}`}><img src={ShareIcon} alt="" /></button>
    </div>
  )
}

export default Share