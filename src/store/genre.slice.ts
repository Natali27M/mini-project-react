import {createAsyncThunk, createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {IActionFulledGenres, IGenreIdAndPage, IMovieByGenre} from "../interfaces";
import {genresService} from "../services";
import {IMoviePage} from "../interfaces/IMoviePage";

export const getAllGenres = createAsyncThunk<IMoviePage,IGenreIdAndPage>(
    "genreSlice/getAllGenres",
// @ts-ignore
    async ({id,page}) => {
        try {
            const genres = await genresService.getGenres(id,page);

            return {moviesByGenre:genres.data.results};

        } catch (e){
            console.log(e);
        }
    }
);

const initialState:IMovieByGenre={
    moviesByGenre: [],
    data:{page:1,total_pages:0},
    status:null,
    error: null
}

const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllGenres.pending.type]: (state: Draft<IMovieByGenre>) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllGenres.fulfilled.type]: (state: Draft<IMovieByGenre>, action: PayloadAction<IActionFulledGenres>) => {
            state.status = 'fulfilled';
            state.moviesByGenre = action.payload.moviesByGenre;
            state.data = action.payload.data;
        },
        [getAllGenres.rejected.type]: (state: Draft<IMovieByGenre>, action: PayloadAction<string>) => {
            state.status = 'reject';
            state.error = action.payload;
        }
    }
});

const genreSliceReducer = genreSlice.reducer;

export default genreSliceReducer;

// import {createAsyncThunk, createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
// import {IMovie, IMovieByGenre} from "../interfaces";
// import {genresService} from "../services";
//
// export const getAllGenres = createAsyncThunk(
//     "genreSlice/getAllGenres",
//
//     async (genre_id:number) => {
//         try {
//             const genres = await genresService.getGenres(genre_id);
//
//              return genres.data.results;
//
//         } catch (e){
//             console.log(e);
//         }
//     }
// );
//
// const initialState:IMovieByGenre={
//     moviesByGenre: [],
//     status:null,
//     error: null
// }
//
// const genreSlice = createSlice({
//     name: "genreSlice",
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [getAllGenres.pending.type]: (state: Draft<IMovieByGenre>) => {
//             state.status = 'pending';
//             state.error = null;
//         },
//         [getAllGenres.fulfilled.type]: (state: Draft<IMovieByGenre>, action: PayloadAction<IMovie[]>) => {
//             state.status = 'fulfilled';
//             state.moviesByGenre = action.payload;
//         },
//         [getAllGenres.rejected.type]: (state: Draft<IMovieByGenre>, action: PayloadAction<string>) => {
//             state.status = 'reject';
//             state.error = action.payload;
//         }
//     }
// });
//
// const genreSliceReducer = genreSlice.reducer;
//
// export default genreSliceReducer;