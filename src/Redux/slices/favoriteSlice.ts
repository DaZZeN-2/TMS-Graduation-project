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
            state.favorites.push(action.payload.movieId);
        },
        // removeMovieFromFavorite: (state, action) => {
        //     state.favorite = action.payload;
        // },
        // favoriteMovie: (state, action: PayloadAction<IFavorite>) => {
        //     state.favorite = action.payload
        // }
    }
})

export const {setMovieToFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer