import {AxiosRequestConfig} from "axios";

import {axiosService} from "./axios.service";
import {urlsMovie} from "../configs/urls";

export const movieService={
    getAll: (page:number) => axiosService.get<string,AxiosRequestConfig>(urlsMovie.movie,{params:{page}}),
    // getById: (movieId: number) => axiosService.get<IMovie>(`/movie/${movieId}`)
}