import {FC} from "react";
import './Home.css'
import CardContainer from '../../Components/card/CardContainer'

interface HomeViewProps {

}

const HomeView: FC<HomeViewProps> = () => {

    return(
        <div>
            <CardContainer/>
        </div>
    )
}

export default HomeView;