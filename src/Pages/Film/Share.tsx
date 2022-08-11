import ShareIcon from '../../img/share-icon.png'
import {FC} from 'react'

interface ShareProps {

}

const Share: FC<ShareProps> = () => {
    
  return (
    <div>
        <button className='share-button'><img src={ShareIcon} alt="" /></button>
    </div>
  )
}

export default Share