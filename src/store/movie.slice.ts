import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {genresService, movieService} from "../services";
import {IMovie, IStateMovie} from "../interfaces";

export const getAllMovie = createAsyncThunk(
    "movieSlice/getAllMovie",
    // @ts-ignore
    async (payload:any) => {
        try {
            const movies = await movieService.getAll(payload.page);
            const genres = await genresService.getAll();

            return {movie: movies.data.results, genre: genres.data.genres, data: movies.data};
        } catch (e){
            console.log(e);
        }
    }
);


const initialState:IStateMovie = {
    movies: [],
    genres: [],
    data:{page:1},
    status:null,
    error: null
};

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,

    reducers: {
        setPage: (state, action: PayloadAction<any>) => {
            state.data.page = action.payload.page;
        }
    },

    extraReducers: {
        [getAllMovie.pending.type]: (state: any) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllMovie.fulfilled.type]: (state: any, action: PayloadAction<any>) => {
            state.status = 'fulfilled';
            state.movies = action.payload.movie;
            state.genres = action.payload.genre;
            state.data = action.payload.data;
            console.log(action.payload.data)
        },
        [getAllMovie.rejected.type]: (state: any, action: PayloadAction<IMovie[]>) => {
            state.status = 'reject';
            state.error = action.payload;
        },
    }
});
const movieSliceReducer = movieSlice.reducer;

export default movieSliceReducer;

export const {setPage} = movieSlice.actions;