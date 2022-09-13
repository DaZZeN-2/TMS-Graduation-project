import { createSlice} from '@reduxjs/toolkit'

interface FavoritesState {
    favorites: number[],
}

const initialState: FavoritesState = {
    favorites: []
}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setMovieToFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeMovieFromFavorite: (state, action) => {
            state.favorites = action.payload(null);
        },
        favoriteMovie: (state, action) => {}
    }
})

export const {setMovieToFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer