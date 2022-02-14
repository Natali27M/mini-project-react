import {createAsyncThunk, createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

import {IActionFulledGenres, IId,IMovieByGenre} from "../interfaces";
import {genresService} from "../services";

export const getAllGenres = createAsyncThunk<any,any>(
    "genreSlice/getAllGenres",

    async ({page, genre_id}) => {
        try {
            const genres = await genresService.getGenres(genre_id, page);

            return {moviesByGenre: genres.data.results, data: genres.data};

        } catch (e) {
            console.log(e);
        }
    }
);

export const getAllGenresPage = createAsyncThunk<any, any>(
    "genreSlice/getAllGenresPage",
    async ({genre_id, page}) => {
        try {
            const genres = await genresService.getGenres(genre_id, page);

            return {moviesByGenre: genres.data.results, data: genres.data};

        } catch (e) {
            console.log(e);
        }
    }
);

const initialState: IMovieByGenre = {
    moviesByGenre: [],
    data: {page: 1, total_pages: 0},
    status: null,
    error: null,
    genreId: 0,

}

const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {
        setGenreId: (state:Draft<IMovieByGenre>, action:PayloadAction<IId>) => {
            state.genreId = action.payload.genre_id;
        }
    },
    extraReducers: {
        [getAllGenres.pending.type]: (state: Draft<IMovieByGenre>) => {
            state.status = "pending";
            state.error = null;
        },
        [getAllGenres.fulfilled.type]: (state: Draft<IMovieByGenre>, action: PayloadAction<IActionFulledGenres>) => {
            state.status = "fulfilled";
            state.moviesByGenre = action.payload.moviesByGenre;
            state.data = action.payload.data;
        },
        [getAllGenres.rejected.type]: (state: Draft<IMovieByGenre>, action: PayloadAction<string>) => {
            state.status = "reject";
            state.error = action.payload;
        }
    }
});

const genreSliceReducer = genreSlice.reducer;

export default genreSliceReducer;

export const {setGenreId} = genreSlice.actions