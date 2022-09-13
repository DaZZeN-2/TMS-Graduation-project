import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FilmContainerParams } from "../../types";
import Card from "./card";
import { IMovie } from "../../types";
import { useThemeContext } from "../../context/themeModeContext";
import {  fetchMovies, useMovieDispatch } from "../../Redux/slices/moviesSlice";
import { useAppSelector } from "../../hooks/redux-hooks";
import { nanoid } from "@reduxjs/toolkit";


const CardContainer = () => {

    const dispatch = useMovieDispatch();
    
    const foundMovies = useAppSelector(state => state.rootReducer.movies);

    const value = useThemeContext();
    const themeClassLoading = value.theme==='light' ? "dark-loading" : "light-loading"

    const [movies, setMovies] = useState<IMovie []>([]);
    const params = useParams<FilmContainerParams>();
    const [page, setPage] = useState<number>(1);
    const [fetching, setFetching] = useState<boolean>(false)

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
            setFetching(false)
        } 
    }, [page])

    useEffect(() => {
        dispatch(fetchMovies(page))
        .then(() => {
                const mergeData = [...movies,...moviesNew]
            if(fetching){
                setMovies(mergeData)
                setPage(currentPage => pageNew + 1)
            }
        })
        .finally(() => setFetching(false))
        .catch(error => {
            console.error(error);
        });


// =================================================>
        // if(fetching){
        //     const moviesNew = foundMovies.value?.data === undefined ? [] : foundMovies.value?.data;
        //     const pageNew = foundMovies.value?.current_page === undefined ? 1 : foundMovies.value?.current_page;
        //     const mergeData = [...movies, ...moviesNew]
        //     setMovies(mergeData)
        //     console.log(mergeData)
        //     setPage(currentPage => pageNew + 1)
        //     // dispatch(fetchMovies(page))
        //     // setFetching(false)
        // }

// =========================================================
        
        // console.log(foundMovies.value?.current_page)
        // const moviesNew = foundMovies.value?.data === undefined ? [] : foundMovies.value?.data;
        // setMovies(moviesNew)
        // console.log(moviesNew);
        
        // const pageNew = foundMovies.value?.current_page === undefined ? 0 : foundMovies.value?.current_page;
        // console.log(moviesNew)
        // console.log(pageNew)
        // const mergeData = [...movies, ...moviesNew]
        // setMovies(mergeData)
        // console.log(mergeData);
        
        // setPage(currentPage => pageNew + 1)
        // if(fetching) {
        //     getFilms(page)
        //     .then((res:any) => {
        //         const apiRes = res.data.data
        
        // })
        // .finally(() => setFetching(false))
        // .catch(error => {
        //     console.error(error);
        // });
        // }
    }, [params.id, fetching, fetchMovies])


        if(fetching) {
            return <div className="loading-wrapper">
                        <div className={`loading-form ${themeClassLoading}`}>
                            <p className={`loading-text ${themeClassLoading}`}>Show more</p>
                            <span className={`loading ${themeClassLoading}`}></span>
                        </div>
                    </div>
        }

    if(!movies) {
        return <div className="loading-wrap">
        <div className={`loading-form ${themeClassLoading}`}>
            <p className={`loading-text ${themeClassLoading}`}>Loading</p>
            <span className={`loading ${themeClassLoading}`}></span>
        </div>
    </div>
    }


        return (
    <div className="card-container-wrapper">
        {movies.map(movie => <Card movie={movie} key={nanoid()}/>)}
    </div>
)
};


export default CardContainer;