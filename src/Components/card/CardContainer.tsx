import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FilmContainerParams } from "../../types";
import { getFilm, Films } from "../../Redux/Api";
import Card from "./card";
import { IMovie } from "../../types";


const CardContainer = () => { 

    const [movies, setMovies] = useState<IMovie []>([]);
    const params = useParams<FilmContainerParams>();
    
    // useEffect(() => {
    //     getFilm('tt3896198', '3831fbf9')
    //     .then((res:any) => {
    //         setMovies(res.data)
    //         console.log(res.data)
    // })
    // .catch(error => {
    //     console.error(error);
    // });
    // }, [params.imdb])

    useEffect(() => {
        Films()
        .then((res:any) => {
            setMovies(res.data.data)
            console.log(res.data.data[0].genres)
    })
    .catch(error => {
        console.error(error);
    });
    }, [params.imdb])

return (
    <div className="card-container-wrapper">
        {movies.map(movie => <Card movie={movie} key={movie.id}/>)}
    </div>
)
};


export default CardContainer;