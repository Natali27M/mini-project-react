import {createAsyncThunk, createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

import {genresService, movieService} from "../services";
import {IActionFulledMovies,IPage, IStateMovie} from "../interfaces";


export const getAllMovie = createAsyncThunk<any,IPage>(
    "movieSlice/getAllMovie",

    async (payload:IPage) => {
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
    data:{page:1,total_pages:0},
    movieDetails:{id:0,original_title:'', poster_path: '',vote_average: 0,release_date: 0,overview: '',genre_ids: []},
    status:null,
    error: null
};

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,

    reducers: {
        setPage: (state:Draft<IStateMovie>, action: PayloadAction<IPage>) => {
            state.data.page = action.payload.page;
        }
    },

    extraReducers: {
        [getAllMovie.pending.type]: (state: Draft<IStateMovie>) => {
            state.status = "pending";
            state.error = null;
        },
        [getAllMovie.fulfilled.type]: (state: Draft<IStateMovie>, action: PayloadAction<IActionFulledMovies>) => {
            state.status = "fulfilled";
            state.movies = action.payload.movie;
            state.genres = action.payload.genre;
            state.data = action.payload.data;
        },
        [getAllMovie.rejected.type]: (state: Draft<IStateMovie>, action: PayloadAction<string>) => {
            state.status = "reject";
            state.error = action.payload;
        }
    }
});

const movieSliceReducer = movieSlice.reducer;

export default movieSliceReducer;

export const {setPage} = movieSlice.actions;

// import {createAsyncThunk, createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
//
// import {genresService, movieService} from "../services";
// import {IActionFulledMovies, IGetAllMovieService, IPage, IStateMovie} from "../interfaces";
//
//
// export const getAllMovie = createAsyncThunk<IGetAllMovieService,any>(
//     "movieSlice/getAllMovie",
// // @ts-ignore
//     async (payload:IPage) => {
//         try {
//             const movies = await movieService.getAll(payload.page);
//             const genres = await genresService.getAll();
//
//             return {movie: movies.data.results, genre: genres.data.genres, data: movies.data};
//
//         } catch (e){
//             console.log(e);
//         }
//     }
// );
//
//
// const initialState:IStateMovie = {
//     movies: [],
//     genres: [],
//     data:{page:1,total_pages:0},
//     movieDetails:{id:0,original_title:'', poster_path: '',vote_average: 0,release_date: 0,overview: '',genre_ids: []},
//     status:null,
//     error: null
// };
//
// const movieSlice = createSlice({
//     name: "movieSlice",
//     initialState,
//
//     reducers: {
//         setPage: (state:Draft<IStateMovie>, action: PayloadAction<any>) => {
//             state.data.page = action.payload.page;
//         }
//     },
//
//     extraReducers: {
//         [getAllMovie.pending.type]: (state: Draft<IStateMovie>) => {
//             state.status = "pending";
//             state.error = null;
//         },
//         [getAllMovie.fulfilled.type]: (state: Draft<IStateMovie>, action: PayloadAction<IActionFulledMovies>) => {
//             state.status = "fulfilled";
//             state.movies = action.payload.movie;
//             state.genres = action.payload.genre;
//             state.data = action.payload.data;
//         },
//         [getAllMovie.rejected.type]: (state: Draft<IStateMovie>, action: PayloadAction<string>) => {
//             state.status = "reject";
//             state.error = action.payload;
//         }
//     }
// });
//
// const movieSliceReducer = movieSlice.reducer;
//
// export default movieSliceReducer;
//
// export const {setPage} = movieSlice.actions;
