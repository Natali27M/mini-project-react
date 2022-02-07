import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {movieService} from "../services";
import {IMovie} from "../interfaces";

// movieService.getAll().then(value => value.data).then(console.log);

export const getAllMovie=createAsyncThunk(
    'movieSlice/getAllMovie',
    async (_,{dispatch})=>{
        const {data} = await movieService.getAll();
        dispatch(setMovies({movies: data}));

    }
)

const initialState = {
    movie: []
};

const movieSlice=createSlice({
    name:'movieSlice',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<{ movies: IMovie[] }>) => {
            state.movies = action.payload.movies;
            console.log(action.payload.movies)
        }
    }
})
const movieSliceReducer = movieSlice.reducer;

export default movieSliceReducer;

export const {setMovies} = movieSlice.actions;