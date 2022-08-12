import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FilmContainerParams } from "../../types";
import { getFilms } from "../../Redux/Api";
import Card from "./card";
import { IMovie } from "../../types";


const CardContainer = () => { 

    const [movies, setMovies] = useState<IMovie []>([]);
    const params = useParams<FilmContainerParams>();


    useEffect(() => {
        getFilms()
        .then((res:any) => {
            setMovies(res.data.data)
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