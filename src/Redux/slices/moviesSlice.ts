import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { IMovie } from '../../types';
import { getFilms } from '../Api';
import { store } from '../store';

interface IResult {
    current_page: number,
    data: IMovie[],
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies',
    (page: number) => {
        return getFilms(page)
            .then((r: any) => {
                return r.data;
            })
    })

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movie: null as IResult | null,
    },
    reducers: {
        setInitialMovies: (state, action) => {
            state.movie = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action: PayloadAction<IResult>) => {
            state.movie = action.payload;
        })
    },
})

export const {setInitialMovies} = moviesSlice.actions

// export const selectMovies = (state:IMovie) => state..movies.value;

export type MovieDispatch = typeof store.dispatch
export const useMovieDispatch = () => useDispatch<MovieDispatch>()

export default moviesSlice.reducer