import { createSlice, PayloadAction} from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        value: [],
    },
    reducers: {
        setMovieFavorite: (state, action: PayloadAction<[]>) => {
            state.value = action.payload;
        },
        removeMovieFavorite: (state, action: PayloadAction<[]>) => {
            state.value = action.payload;
        },
    }
})

export const {setMovieFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer