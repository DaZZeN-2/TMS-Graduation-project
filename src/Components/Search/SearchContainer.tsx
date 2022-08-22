import Search from "./SearchInput"
import { FilmContainerParams, IMovie } from "../../types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilms } from "../../Redux/Api";

const SearchContainer = () => {

    const [movies, setMovies] = useState<IMovie []>([]);
    const params = useParams<FilmContainerParams>()
    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(true)

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
            getFilms(page)
            .then((res:any) => {
                const apiRes = res.data.data
                
                // dispatch(apiRes)
                const mergeData = [...movies, ...apiRes]
                setMovies(mergeData)
                setPage(currentPage => res.data.current_page + 1)
                console.log(res.data)
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