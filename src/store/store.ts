import {configureStore, combineReducers} from "@reduxjs/toolkit";

import movieSliceReducer from "./movie.slice";
import genreSliceReducer from "./genre.slice";


const rootReducer = combineReducers({
    movies: movieSliceReducer,
    genres:genreSliceReducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];