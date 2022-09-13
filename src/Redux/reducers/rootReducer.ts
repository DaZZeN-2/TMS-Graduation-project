import {combineReducers} from '@reduxjs/toolkit';
import favoriteReducer from '../slices/favoriteSlice'
import moviesReducer from '../slices/moviesSlice'

export const rootReducer = combineReducers({
    favorite: favoriteReducer,
    movies: moviesReducer,
})