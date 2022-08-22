import {combineReducers} from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice'
import favoriteReducer from '../slices/favoriteSlice'
import moviesReducer from '../slices/moviesSlice'

export const rootReducer = combineReducers({
    user: userReducer,
    favorite: favoriteReducer,
    movies: moviesReducer,
})