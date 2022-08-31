import Search from "./SearchInput"
import { FilmContainerParams, IMovie } from "../../types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";
import { fetchMovies, useMovieDispatch } from "../../Redux/slices/moviesSlice";

const SearchContainer = () => {

    const dispatch = useMovieDispatch();

    const [movies, setMovies] = useState<IMovie []>([]);
    const params = useParams<FilmContainerParams>()
    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(true)
    const foundMovies = useAppSelector(state => state.rootReducer.movies);
    const moviesNew = foundMovies.movie?.data === undefined ? [] : foundMovies.movie?.data;
    const pageNew = foundMovies.movie?.current_page === undefined ? 1 : foundMovies.movie?.current_page;

    const scrollHandler = (e:any) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    useEffect(() => {
        if(fetching) {
            dispatch(fetchMovies(page))
            .then((res:any) => {
                const mergeData = [...movies, ...moviesNew]
                if(fetching) {
                    setPage(currentPage => pageNew + 1)
                    setMovies(mergeData)
                }
        })
        .finally(() => setFetching(false))
        .catch(error => {
            console.error(error);
        });
        }
    }, [params.id, fetching])

    return (
        <>
            <Search movies={movies}/>
        </>
    )
}

export default SearchContainer;