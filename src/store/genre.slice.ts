import {createAsyncThunk, createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

import {IActionFulledGenres, IId, IIdPage, IMovieByGenre, IPage} from "../interfaces";
import {genresService} from "../services";
import {IMoviePage} from "../interfaces/IMoviePage";

export const getAllGenres = createAsyncThunk<IMoviePage, IId>(
    "genreSlice/getAllGenres",
// @ts-ignore
    async ({page, genre_id}) => {
        try {
            const genres = await genresService.getGenres(genre_id, page);

            return {moviesByGenre: genres.data.results, data: genres.data};

        } catch (e) {
            console.log(e);
        }
    }
);

export const getAllGenresPage = createAsyncThunk<IMoviePage, IPage>(
    "genreSlice/getAllGenresPage",
// @ts-ignore
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
        // setPageGenre: (state: Draft<IMovieByGenre>, action: PayloadAction<IPage>) => {
        //     state.data.page = action.payload.page;
        // },
        setGenreId: (state:Draft<IMovieByGenre>, action:PayloadAction<IIdPage>) => {
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

